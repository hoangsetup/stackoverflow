// const AWSSecretsManager = require('./');

describe("get()", () => {
  const Credentials = {
    AccessKeyId: 'AccessKeyId',
    SecretAccessKey: 'SecretAccessKey',
    SessionToken: 'SessionToken',
  };

  const region = 'region';
  const iam = 'iam';

  let STS;
  let assumeRoleMock;

  let SecretsManager;
  let getSecretValueMock;
  let responseMock = {};


  let myLib;
  beforeEach(() => {
    jest.resetModules();

    process.env.AWS_REGION = region;
    process.env.AWS_RESOURCES_IAM_ROLE = iam;

    assumeRoleMock = jest.fn().mockImplementation(() => {
      return {
        Credentials,
        promise: jest.fn().mockReturnThis(),
      };
    })
    STS = jest.fn().mockImplementation(() => {
      return {
        assumeRole: assumeRoleMock,
      };
    });

    getSecretValueMock = jest.fn().mockImplementation(() => {
      return {
        promise: jest.fn().mockResolvedValue(responseMock),
      };
    });
    SecretsManager = jest.fn().mockImplementation(() => {
      return {
        getSecretValue: getSecretValueMock,
      };
    });
    jest.mock('aws-sdk', () => {
      return {
        STS,
        SecretsManager,
      }
    });

    const AWSSecretsManager = require('./');
    myLib = new AWSSecretsManager();
  })
  it("using valid secretId should return value from Secrets Manager", async () => {
    const secretId = 'secretId';
    const result = await myLib.get(secretId);

    expect(STS).toHaveBeenCalledWith({ region, });
    expect(assumeRoleMock).toHaveBeenCalledWith({
      RoleArn: iam,
      RoleSessionName: 'CrossAccountCredentials',
      DurationSeconds: 3600,
    });

    expect(SecretsManager).toHaveBeenCalledWith({
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      region,
    });
    expect(getSecretValueMock).toHaveBeenCalledWith({ SecretId: secretId });

    expect(result).toEqual(responseMock);
  })
})
