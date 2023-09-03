import {Request, Response} from "express";
import jwt from 'jsonwebtoken';
import {validateToken} from "../../utils/validateToken";
import {SECRET_KEY} from '../../constant/authSecrets';
/**
 * @swagger
 * /auth/login:
 *   post:
 *     description: Generate JWT token
 *     parameters:
 *       - name: username
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Returns JWT token
 */
export const login = (req: Request, res: Response) => {
	const { username, password } = req.body;
	if (username && password) {
		const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
		res.json({ token });
	} else {
		res.status(401).json({ message: 'Invalid credentials' });
	}
};

/**
 * @swagger
 * /auth/validate:
 *   post:
 *     description: Validate JWT token
 *     parameters:
 *       - name: authorization
 *         in: header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Token is valid
 *       401:
 *         description: Token is invalid or expired
 */

export const validateTokenEndpoint = async (req: Request, res: Response) => {
	const token = req.headers['authorization'];
	
	if (token) {
		try {
			const user = await validateToken(token);
			res.json({ message: 'Token is valid', user });
		} catch (error) {
			res.status(401).json({ message: error });
		}
	} else {
		res.status(401).json({ message: 'No token provided' });
	}
};



