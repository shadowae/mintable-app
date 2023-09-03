
# Project Title

This is a serverless Typescript Node Project to work with NFTS



## Features

- Mint NFTS
- List all NFTS
- Get details of a NFTS


## Tech Stack

**Server:** Node, Express, Serverless, AWS Lambda, AWS Dynamodb


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd mintable-app
```

Install dependencies

```bash
  npm install
```

Start the server as serverless

```bash
  npm run local-serverless
```

Start the server as Node server

```bash
  npm run dev
```


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Demo

Endpoint is deployed at 

```https://t65m3ezdq9.execute-api.ap-southeast-1.amazonaws.com/dev```
## API Reference

#### Get all NFTS

```http
  GET /ntfs
```

| Parameter | Type     | Description                |
|:----------|:---------|:---------------------------|
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /ntfs/:{id}
```

| Parameter | Type     | Description                      |
|:----------|:---------|:---------------------------------|
| `id`      | `string` | **Required**. Id of NFT to fetch |

#### Get item

```http
  POST /ntfs/:{id}
```

| Body          | Type     | Description                           |
|:--------------|:---------|:--------------------------------------|
| `name`        | `string` | **Required**. name of NFT to mint     |
| `imageUrl`    | `string` | **Required**. imageUrl of NFT to mint |
| `description` | `string` | **Required**. Id of NFT to mint       |


## Appendix

Any additional information goes here

If you would choose to deploy this in a AWS Lambda of your account. Please ensure a few things

1. Create credentials with sufficient rights to deploy the serverless code
2. Set up of AWS credentials on your machine including the region
3. Please create a DynamoDB table called **NFTs** in the **SAME REGION** as the lambda being deployed
