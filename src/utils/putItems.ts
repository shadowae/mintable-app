import { PutCommand } from "@aws-sdk/lib-dynamodb";
import {NFT} from "../models/NTF";
import DynamoClient from './DynamoClient';

export default async ({TableName, Item}: {TableName: string ; Item: NFT}) => {
	const command = new PutCommand({
		TableName: TableName,
		Item: Item,
	});
	
	const response = await DynamoClient.send(command);
	console.log(response);
	return response;
};
