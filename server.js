const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { userId, name, gymAccess } = JSON.parse(event.body);

  if (!userId || !name || !gymAccess) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  const params = {
    TableName: "YourDynamoDBTableName",
    Item: {
      userId, // Partition key
      name,
      gymAccess,
    },
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "User data saved successfully" }),
    };
  } catch (err) {
    console.error("DynamoDB error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not save user data" }),
    };
  }
};
