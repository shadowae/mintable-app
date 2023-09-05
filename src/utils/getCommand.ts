import { GetCommand } from '@aws-sdk/lib-dynamodb';
import DynamoClient from './DynamoClient';

export default async ({TableName, Key} : { TableName: string; Key: Record<string, any> }) => {
	const command = new GetCommand({
		TableName,
		Key
	});
	
	const response = await DynamoClient.send(command);
	console.log(response);
	return response;
};

