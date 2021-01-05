I recommend using `for loop` instead of `map`, `Promise.all` will call many request by parallel, it maybe take DynamoDB become stressful.

Convert your handler function to `async/await` function, then just wait until dynamodb process finish.

Ref: [Convert aws-sdk callback to Promise][1]

```js
'use strict';

var AWS = require('aws-sdk'), documentClient = new AWS.DynamoDB.DocumentClient();

const insertAccount = async (e) => {
  const params = {
    Item: {
      UID: ctx.awsRequestId,
      AccountName: e.accountname,
      AccountStatus: e.accountstatus,
      MainNumber: e.mainnumber,
      FaxNumber: e.faxnumber,
      EmergencyNumber: e.emergencynumber,
      EPAPERNO: e.epaperno,
      BGB: e.bgb,
      WebID: e.webid,
      BoxProgram: e.boxprogram,
      ReportGroup: e.reportgroup,
      CreditLimit: e.creditlimit,
      Customer: e.customer,
      Transporter: e.transporter,
      TSDF: e.tsdf,
      Permit: e.permit,
      Created: e.created,
      Author: e.author,
      Modified: e.modified,
      Editor: e.editor
    },
    TableName: 'Accounts'
  };
  return documentClient.put(params).promise(); // convert to Promise
}

exports.handler = async (event, ctx) => { // Async function
  for (const item of event) {
    console.log(item);
    await insertAccount(item) // wait until it finish and go to next item
      .catch((error) => {
        console.log(error);
        // throw error; don't care about this error, just continue
      });
  }
  console.log("Done");
};
```


  [1]: https://stackoverflow.com/questions/51328292/how-to-use-async-and-await-with-aws-sdk-javascript/51328537#51328537
