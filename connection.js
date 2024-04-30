const AWS = require('aws-sdk');

// Create DynamoDB Document Client
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
    try {
        const connectionId = event.requestContext.connectionId;
        const params = {
            TableName: 'ma_table', // Replace 'yourTableName' with your DynamoDB table name
            Item: {
                connectionId: connectionId
            }
        };
        await dynamodb.put(params).promise();
        return { statusCode: 200, body: 'Connected to DynamoDB' };
    } catch (error) {
        console.error('Error connecting to DynamoDB:', error);
        return { statusCode: 500, body: 'Error connecting to DynamoDB' };
    }
};
