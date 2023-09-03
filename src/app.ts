import express from 'express';
import serverless from 'serverless-http';
import dotenv from 'dotenv';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swaggerOptions';  // <-- import your swagger options

import routes from './routes';
dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', routes);

app.use((req: express.Request, res: express.Response) => {
	res.status(404).send();
});

app.use((err: any, req: express.Request, res: express.Response) => {
	res.status(err.status || 500).send();
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
export const handler = serverless(app);
