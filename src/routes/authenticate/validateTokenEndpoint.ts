import {Request, Response} from "express";
import {validateToken} from "../../utils/validateToken";

/**
 * @swagger
 * /auth/validate:
 *   post:
 *     tags:
 *       - Inactive
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



