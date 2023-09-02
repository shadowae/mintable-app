import {Request, Response} from "express";
import scanCommand from "../../utils/scanCommand";

export default async (req: Request, res: Response)=> {
	const params = {
		TableName: "NFTs",
	};
	try {
		const result = await scanCommand(params);
		res.send(result.Items)
	} catch (error) {
		// @ts-ignore
		res.status(400).send(error.message)
	}
};





