import {Router} from 'express';
import {login} from './login';
import {signup} from './signup';

const router = Router();
/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     description: Generate JWT token
 *     parameters:
 *       - name: body
 *         description: Username and password required for login
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - username
 *             - password
 *           properties:
 *             username:
 *               type: string
 *               example: "johnDoe"
 *             password:
 *               type: string
 *               format: password
 *               example: "p@ssw0rd123"
 *     responses:
 *       200:
 *         description: Returns JWT token
 */
router.post('/login', login);
/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags:
 *       - Authentication
 *     description: Register a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: Username and password required for registration
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - username
 *             - password
 *           properties:
 *             username:
 *               type: string
 *               example: "johnDoe"
 *             password:
 *               type: string
 *               format: password
 *               example: "p@ssw0rd123"
 *     responses:
 *       201:
 *         description: User registered successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: User registered successfully
 *       400:
 *         description: Username already exists
 *       500:
 *         description: Internal server error
 */
router.post('/signup', signup);
// router.post('/validate', validateTokenEndpoint);
export default router;
