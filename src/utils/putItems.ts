import { PutCommand } from '@aws-sdk/lib-dynamodb';
import {NFT} from '../models/NTF';
import DynamoClient from './DynamoClient';
import {User} from '../models/user';

export default async ({TableName, Item}: {TableName: string ; Item: NFT|User}) => {
	const command = new PutCommand({
		TableName: TableName,
		Item: Item,
	});
	
	const response = await DynamoClient.send(command);
	console.log(response);
	return response;
};
