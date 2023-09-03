import { Request, Response, NextFunction } from 'express';
import { validateToken } from './validateToken';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers['authorization'];
	if (!token) {
		return res.status(401).send('Missing token');
	}
	
	try {
		await validateToken(token);
		next();
	} catch (error) {
		return res.status(401).send(error);
	}
};

export default authMiddleware;
