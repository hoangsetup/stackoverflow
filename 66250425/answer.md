Just do it one by one, using `async/await` to do that, this means you have to use `parseStringPromise` instead.

```js
var response = [];

for (var i = 0; i < result.length; i++) {
  let m = result[i].id
  let xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">' +
    '<soapenv:Header/>' +
    '<soapenv:Body>' +
    '<tem:EjecutarConsultaXML>' +
    '<!--Optional:-->' +
    '<tem:pvstrxmlParametros>' +
    '<![CDATA[' +
    '<Consulta><NombreConexion>USERNAME</NombreConexion>' +
    '<IdConsulta>QUERY</IdConsulta>' +
    '<Parametros>' +
    '<doc>' + m + '</doc>' +
    '</Parametros>' +
    '</Consulta>' +
    ']]>' +
    '</tem:pvstrxmlParametros>' +
    '</tem:EjecutarConsultaXML>' +
    '</soapenv:Body>' +
    '</soapenv:Envelope>';

  const options = {
    explicitArray: true
  };

  try {
    var { data } = await axios.post(url, xml, { // extract data from data.data
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8'
      }
    })

    var xmlObject = await xml2js.parseStringPromise(data)
    var temp = (xmlObject['soap:Envelope']['soap:Body'][0]['EjecutarConsultaXMLResponse'][0]['EjecutarConsultaXMLResult'][0]['diffgr:diffgram'][0]['NewDataSet'][0]['Resultado'])

    response.push({
      doc: m,
      state: temp[0].f430_ind_estado[0]
    }) // push item to result array
  } catch (error) {
    console.log(error);
  }

}

res.send(result) // send the result to client
```
