import {Request, Response} from 'express';
import getCommand from '../../utils/getCommand';

export default async (req: Request, res: Response)=> {
	const nftId = req.params['nftId'];
	
	const params = {
		TableName: 'NFTs',
		Key: {
			nftId: nftId
		}
	};
	
	try {
		const result = await getCommand(params);
		if (result.$metadata.httpStatusCode != null) {
			res.status(result.$metadata.httpStatusCode).send(result.Item);
		}
	} catch (error) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		res.status(400).send(error.message);
	}
};
