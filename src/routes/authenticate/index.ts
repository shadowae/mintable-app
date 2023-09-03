import {Router} from "express";
import { login, validateToken } from './authenticate';

const router = Router();

router.post('/login', login);
router.post('/validate', validateToken);
export default router;
