'use strict'

module.exports.getEnvs = async () => {
  console.log(process.env);
  return {
    statusCode: 200,
    body: JSON.stringify(process.env),
  }
}