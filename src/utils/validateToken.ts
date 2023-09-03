import jwt from 'jsonwebtoken';
import {SECRET_KEY} from '../constant/authSecrets';

export const validateToken = (token: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, SECRET_KEY, (err, decoded) => {
			if (err) {
				reject('Token is invalid or expired');
			} else {
				resolve(decoded);
			}
		});
	});
};
