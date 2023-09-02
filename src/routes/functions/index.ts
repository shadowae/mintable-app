import {Router} from 'express';
import getItemsDetails from './getItemDetails'
import listItem from './listItem'
import mintItem from './mintItem'

const router = Router();

router.get('/', listItem);
router.get('/:nftId', getItemsDetails);
router.post('/', mintItem);

export default router;
