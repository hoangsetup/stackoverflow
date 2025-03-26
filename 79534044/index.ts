import { DynamoDBClient, PutItemCommand, PutItemCommandInput, PutItemCommandOutput } from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient();

const queryDB: DynamoDBClient['send'] = async (
  command: Parameters<DynamoDBClient['send']>[0],
) => {
  try {
    return await client.send(command);
  } catch (e) {
    console.error(e);
  }
};

const addItemToDb = async (data: any): Promise<PutItemCommandOutput> => {
    const command = new PutItemCommand({
      
    } as PutItemCommandInput);
  
    return await queryDB(command);
  }