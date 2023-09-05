import express, {Request, Response} from 'express';
const router = express.Router({});

interface HealthObject {
	uptime: number,
	message: string | unknown,
	timestamp: number
}

router.get('/', async (req: Request, res: Response) => {
	
	const healthcheck: HealthObject  = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
	};
	try {
		res.send(healthcheck);
	} catch (error) {
		healthcheck.message = error;
		res.status(503).send();
	}
});
export default router;
