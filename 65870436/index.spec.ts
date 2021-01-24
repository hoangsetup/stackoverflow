import * as AWS from 'aws-sdk';
import * as dynamoDbUtils from './index';
import { mocked } from 'ts-jest/utils'

jest.mock("aws-sdk", () => {
  return {
    DynamoDB: {
      DocumentClient: jest.fn(),
    },
  };
});

describe('dynamo-db.utils', () => {
  describe('updateEntity', () => {
    let updateMocked: jest.Mock;
    let updatePromiseMocked: jest.Mock;
    beforeEach(() => {
      updateMocked = jest.fn();
      updatePromiseMocked = jest.fn();

      updateMocked.mockReturnValue({
        promise: updatePromiseMocked,
      });

      mocked(AWS.DynamoDB.DocumentClient).mockImplementation(() => {
        return { update: updateMocked } as unknown as AWS.DynamoDB.DocumentClient;
      });

      dynamoDbUtils.init();
    });

    it('Should request to Dynamodb with correct param and forward result from Dynamodb', async () => {
      const totalNumberOfCharacters = 2000;
      const id = 'id';
      const tableName = 'tableName';
      const updatedItem = {};


      const params = {
        TableName: tableName,
        Key: { 'id': id },
        UpdateExpression: 'set totalNumberOfCharacters = :totalNumberOfCharacters',
        ExpressionAttributeValues: {
          ':totalNumberOfCharacters': totalNumberOfCharacters
        },
        ReturnValues: 'UPDATED_NEW'
      };
      updatePromiseMocked.mockResolvedValue(updatedItem);

      const result = await dynamoDbUtils.updateEntity(tableName, id, totalNumberOfCharacters);

      expect(result).toEqual(updatedItem);
      expect(updateMocked).toHaveBeenCalledWith(params);
    });
  });
});
