/* eslint-disable */
import SNS from 'aws-sdk/clients/sns';
const snsClient = new SNS({ region: process.env.AWS_REGION });

exports.handler = async (event) => {
  try {
    const { classifiedRequestId } = JSON.parse(event.Records[0].body);
    await emitDeletionComplete(classifiedRequestId);
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}

const emitDeletionComplete = async (id) => {
  try {
    await snsClient.publish({
      Message: JSON.stringify({
        type: 'DELETE_COMPLETE',
        data: {
          id
        }
      }),
      TopicArn: process.env.SNS_ARN
    }).promise();
  } catch (err) {
    console.error(err, err.stack);
    throw new Error('We do not succeed to publish the message DELETE_COMPLETE to ARN: ' + process.env.SNS_ARN);
  }
};
