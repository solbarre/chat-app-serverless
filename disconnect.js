const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async function (event, context) {
  await ddb
	.delete({
	  TableName: 'ma_table',
	  Key: {
		connectionId: event.requestContext.connectionId,
	  },
	})
	.promise();
  return {
	statusCode: 200,
  };
};
