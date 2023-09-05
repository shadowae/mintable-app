import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {SECRET_KEY, USERS_TABLE} from '../../constant/authSecrets';
import getCommand from '../../utils/getCommand';

export const login = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	if (!username || !password) {
		res.status(401).json({ message: 'Invalid credentials' });
	}
	
	try {
		// Fetch the user data from DynamoDB
		const getUserParams = {
			TableName: USERS_TABLE,
			Key: { 'username': username }
		};
		const result = await getCommand(getUserParams);
		
		const user = result.Item;
		if (user) {
			// Check if passwords match using bcrypt
			const passwordIsValid = bcrypt.compareSync(password, user.hashedPassword);
			
			if (passwordIsValid) {
				const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
				res.json({ token });
			} else {
				res.status(401).json({ message: 'Invalid credentials' });
			}
		} else {
			res.status(404).json({ message: 'User not found' });
		}
	} catch (error) {
		console.error('Error logging in:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
};
