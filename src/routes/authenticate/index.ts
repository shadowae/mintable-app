import {Router} from "express";
import { login } from './authenticate';

const router = Router();

router.post('/login', login);
// router.post('/validate', validateTokenEndpoint);
export default router;
