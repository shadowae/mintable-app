import {ScanCommand} from '@aws-sdk/lib-dynamodb';
import DynamoClient from './DynamoClient';
export default async ({TableName} : { TableName: string; }) => {
	const command = new ScanCommand({
		TableName
	});
	
	return DynamoClient.send(command);
};
