import {Router} from 'express';
import getItemsDetails from './getItemDetails'
import listItem from './listItem'
import mintItem from './mintItem'
import authMiddleware from "../../utils/middleware";

const router = Router();

router.use(authMiddleware);  // Middleware applied here

/**
 * @swagger
 * /nfts:
 *   get:
 *     tags:
 *       - NTFs
 *     description: Retrieve a list of all NFTs
 *     responses:
 *       200:
 *         description: Array of all NFTs
 *       400:
 *         description: Error occurred
 */
router.get('/', listItem);
/**
 * @swagger
 * /nfts/{nftId}:
 *   get:
 *     tags:
 *       - NTFs
 *     description: Retrieve details of a specific NFT by its ID
 *     parameters:
 *       - name: nftId
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Details of the NFT
 *       400:
 *         description: Error occurred
 */
router.get('/:nftId', getItemsDetails);
/**
 * @swagger
 * /nfts/mint:
 *   post:
 *     tags:
 *       - NTFs
 *     description: Mint a new NFT
 *     parameters:
 *       - name: name
 *         in: body
 *         required: true
 *         type: string
 *       - name: description
 *         in: body
 *         required: true
 *         type: string
 *       - name: imageUrl
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: The newly minted NFT
 *       400:
 *         description: Error occurred
 */
router.post('/', mintItem);

export default router;
