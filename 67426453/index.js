const AWS = require("aws-sdk");
const enums = require("./enums");

var https = require("https");
var agent = new https.Agent({
  maxSockets: 5000,
});
const tsClient = new AWS.TimestreamWrite({
  maxRetries: 10,
  httpOptions: {
    timeout: 20000,
    agent: agent,
  },
});

module.exports = {
  log: async function (audit) {
    try {
      if (Object.keys(audit).length !== 0) {
        if (!isPresent(audit, "name")) {
          throw new Error("Name shouldn't be empty");
        }

        if (!isPresent(audit, "value")) {
          throw new Error("Value shouldn't be empty");
        }

        return await writeRecords(recordParams(audit));
      } else {
        throw new Error("Audit object is empty");
      }
    } catch (e) {
      throw new Error(e);
    }
  },
};
function isPresent(obj, key) {
  return obj[key] != undefined && obj[key] != null && obj[key] != "";
}
function recordParams(audit) {
  const currentTime = Date.now().toString(); // Unix time in milliseconds
  const dimensions = [
    // { Name: "client", Value: audit["clientId"] },
    { Name: "user", Value: audit["userId"] },
    { Name: "entity", Value: audit["entity"] },
    { Name: "action", Value: audit["action"] },
    { Name: "info", Value: audit["info"] },
  ];

  return {
    Dimensions: dimensions,
    MeasureName: audit["name"],
    MeasureValue: audit["value"],
    MeasureValueType: "VARCHAR",
    Time: currentTime.toString(),
  };
}
function writeRecords(records) {
  try {
    const params = {
      DatabaseName: enums.AUDIT_DB,
      TableName: enums.AUDIT_TABLE,
      Records: [records],
    };

    return tsClient.writeRecords(params).promise();
  } catch (e) {
    throw new Error(e);
  }
}
