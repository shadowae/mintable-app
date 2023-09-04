import path from 'path';
const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'MintableLite API',
			version: '1.0.0',
			description: 'API to mint, list, and sell NFTs',
		},
		servers: ['http://localhost:3000'],
	},
	apis: [
		path.join(__dirname, 'routes', '*.ts'),
		path.join(__dirname, 'routes', 'ntfs', '*.ts'),
		path.join(__dirname, 'routes', 'authenticate', '*.ts')
	],
};

export default swaggerOptions;
