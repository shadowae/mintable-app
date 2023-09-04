import {Router} from "express";
import { login } from './authenticate';
import {signup} from "./signup";

const router = Router();

router.post('/login', login);
router.post('/signup', signup);
// router.post('/validate', validateTokenEndpoint);
export default router;
