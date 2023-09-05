import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

/*
Ideally we should use this to prevent error from being thrown as shapes will change.
however, there is a requirement for 3 elements to be present.
If in the future, we add optional parameters for NFTs, we can turn this one to prevent unnecessary error thrown.

translate config will be used as such below
const docClient = DynamoDBDocumentClient.from(client);

const marshallOptions = {
	removeUndefinedValues: true, // false, by default.
};

const translateConfig = { marshallOptions };
*/

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export default docClient;
