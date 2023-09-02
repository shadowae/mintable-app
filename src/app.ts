import express from 'express';
import serverless from 'serverless-http';
import dotenv from 'dotenv';

import routes from './routes';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.use((req: express.Request, res: express.Response) => {
	res.status(404).send();
});

app.use((err: any, req: express.Request, res: express.Response) => {
	res.status(err.status || 500).send();
});

export const handler = serverless(app);
