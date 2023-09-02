import { Router } from 'express';

import functions from './functions';
import healthcheck from './healthcheck'

const router = Router();

router.use('/functions', functions);
router.use('/healthcheck', healthcheck);

export default router;
