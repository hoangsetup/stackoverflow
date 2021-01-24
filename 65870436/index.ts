import AWS from 'aws-sdk';

let db: AWS.DynamoDB.DocumentClient;

export function init() {
  db = new AWS.DynamoDB.DocumentClient({
    region: ('region')
  });
}

export async function updateEntity(tableName: string, id: string, totalNumberOfCharacters: number): Promise<AWS.DynamoDB.UpdateItemOutput> {
  try {
    const params = {
      TableName: tableName,
      Key: { 'id': id },
      UpdateExpression: 'set totalNumberOfCharacters = :totalNumberOfCharacters',
      ExpressionAttributeValues: {
        ':totalNumberOfCharacters': totalNumberOfCharacters
      },
      ReturnValues: 'UPDATED_NEW'
    };

    const updatedItem = await db.update(params).promise();

    return updatedItem;
  } catch (err) {
    throw err;
  }
}
