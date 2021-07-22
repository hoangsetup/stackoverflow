At first, you get back `secret` as `data.SecretString`, then now `secret` just is a normal string. In your case, it is a JSON string, you must cast your string to a JSON object, then you can access the information by attribute name easily.

To do that, you can use [JSON.parse][1] method to convert a json string to json object: 

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    var secret = `{"username":"***","password":"***","engine":"mysql","host":"***.***.us-east-1.rds.amazonaws.com","port":3306,"dbname":"***","dbInstanceIdentifier":"***"}
    `;

    const secretObj = JSON.parse(secret);

    console.log(secretObj.host)

<!-- end snippet -->




  [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
