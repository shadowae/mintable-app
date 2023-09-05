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
		path.join(__dirname, '*.ts'),
		path.join(__dirname, 'ntfs', '*.ts'),
		path.join(__dirname, 'authenticate', '*.ts')
	],
};

export default swaggerOptions;
