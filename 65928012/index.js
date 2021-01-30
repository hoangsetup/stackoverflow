const { STS, SecretsManager } = require('aws-sdk')

class AWSSecretsManager {
  constructor() {

  }

  async get(secretId) {
    const sts = new STS({ region: process.env.AWS_REGION });
    const stsParams = {
      RoleArn: process.env.AWS_RESOURCES_IAM_ROLE,
      RoleSessionName: 'CrossAccountCredentials',
      DurationSeconds: 3600,
    };

    const assumeRole = await sts.assumeRole(stsParams).promise();
    const secretsParam = {
      accessKeyId: assumeRole.Credentials.AccessKeyId,
      secretAccessKey: assumeRole.Credentials.SecretAccessKey,
      sessionToken: assumeRole.Credentials.SessionToken,
      region: process.env.AWS_REGION
    };

    const client = new SecretsManager(secretsParam);
    return client.getSecretValue({ SecretId: secretId }).promise()
  }

}

module.exports = AWSSecretsManager;
