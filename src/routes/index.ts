import { Router } from 'express';
import authenticate from './authenticate';
import ntfs from './ntfs';
import healthcheck from './healthcheck';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swaggerOptions';

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const router = Router();

router.use('/authenticate', authenticate);
router.use('/nfts', ntfs);
/**
 * @swagger
 * /healthcheck:
 *   get:
 *     tags:
 *       - Health
 *     description: Retrieve the system health information
 *     responses:
 *       200:
 *         description: System is healthy
 *         schema:
 *           type: object
 *           properties:
 *             uptime:
 *               type: number
 *             message:
 *               type: string
 *             timestamp:
 *               type: number
 *       503:
 *         description: Service Unavailable
 */
router.use('/healthcheck', healthcheck);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocs));

export default router;
