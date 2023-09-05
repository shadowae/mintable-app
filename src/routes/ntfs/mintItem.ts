import {Request, Response} from 'express';
import { NFT } from '../../models/NTF';
import putItem from '../../utils/putItems';

export default async (req: Request, res: Response)=> {
	const { name, description, imageUrl } = req.body;
	const nftId = `nft_${Date.now()}`;
	
	const nft: NFT = {
		nftId,
		name,
		description,
		imageUrl
	};
	
	const params = {
		TableName: 'NFTs',
		Item: nft
	};
	
	try {
		const result = await putItem(params);
		if (result.$metadata.httpStatusCode != null) {
			res.status(result.$metadata.httpStatusCode).send(nft);
		}
	} catch (error) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		res.status(400).send(error.message);
	}
};


