const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'MintableLite API',
			version: '1.0.0',
			description: 'API to mint, list, and sell NFTs',
		},
		servers: ['http://localhost:3000'],
	},
	apis: ['./src/routes/*.ts', './src/routes/ntfs/*.ts', './src/routes/authenticate/*.ts'],
};

export default swaggerOptions;
