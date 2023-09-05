import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import putItem from '../../utils/putItems';
import getCommand from '../../utils/getCommand';
import {USERS_TABLE} from '../../constant/authSecrets';

export const signup = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	
	// Check for existing user
	try {
		const getUserParams = {
			TableName: USERS_TABLE,
			Key: { username }
		};
		
		const existingUser = await getCommand(getUserParams);
		if (existingUser.Item) {
			// We should ideally not respond as such as it can indicate that the user is valid to hackers
			res.status(400).json({ message: 'Username already exists' });
			return;
		}
	} catch (error) {
		console.error('Error checking user existence:', error);
		res.status(500).json({ message: 'Internal server error' });
		return;
	}
	
	// Hash the password
	const saltRounds = 10;
	const hashedPassword = bcrypt.hashSync(password, saltRounds);
	
	// Save to DynamoDB
	const params = {
		TableName: USERS_TABLE,
		Item: {
			username,
			hashedPassword
		}
	};
	
	try {
		const result = await putItem(params);
		if (result.$metadata.httpStatusCode != null) {
			res.status(201).json({ message: 'User registered successfully' });
		}
	} catch (error) {
		console.error('Error registering user:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};
