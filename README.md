# 🏗 Scaffold-ETH-0G

<div align="center">
<img src="packages/nextjs/public/0g.svg" width="200" />
</div>

<h4 align="center">
  <a href="https://docs.0g.ai">0G Documentation</a>
  | <a href="https://github.com/siddhant-k08/scaffold-eth-0g/issues">Report Issue</a>
</h4>

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript for 0G Testnet.

-   ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
-   🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
-   🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
-   🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
-   🔐 **0G Network Integration**: Seamlessly connect to different wallet providers and interact with the 0G Testnet.
-   🌐 **0G Testnet Ready**: Pre-configured for 0G Testnet with Chain ID 16601 and proper RPC endpoints.

![Front Page](./packages/nextjs/public/front_page.png)

## Requirements

Before you begin, you need to install the following tools:

-   [Node (>= v18.18)](https://nodejs.org/en/download/)
-   Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
-   [Git](https://git-scm.com/downloads)

## Quickstart

To get started, follow the steps below:

1. Clone this repo & install dependencies

```sh
git clone https://github.com/siddhant-k08/scaffold-eth-0g.git
```

2. Open the project directory and install dependencies

```sh
cd scaffold-eth-0g && yarn install
```

3. Setup `.env` file for Hardhat:

Make a copy of `.env.example` in `packages/hardhat` folder, name it `.env` and enter the respective values

```
DEPLOYER_PRIVATE_KEY=your_private_key_here
OG_RPC_URL=https://evmrpc-testnet.0g.ai/YOUR_API_KEY_HERE
```

4. Deploying smart contracts on [0G](https://0g.ai/):

Once the `.env` file is setup, you can now run the below command in your terminal.

```sh
yarn deploy
```

This command deploys a test smart contract to the 0G testnet network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

5. Setup `.env` file for Next.js app (optional):

Make a copy of `.env.example` in `packages/nextjs` folder, name it `.env` and enter the respective values

```
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
NEXT_PUBLIC_ZERO_G_RPC_URL=https://evmrpc-testnet.0g.ai/YOUR_API_KEY_HERE
```

6. On a second terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

**What's next**:

-   Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
-   Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
-   Edit your deployment scripts in `packages/hardhat/deploy`
-   Edit your smart contract test in: `packages/hardhat/test`. To run test use `yarn hardhat:test`

## 0G Network Configuration

This scaffold is configured for 0G Testnet by default. Here are the network details:

- **Network Name**: 0G Testnet
- **Chain ID**: 16601
- **Currency**: 0G (Test 0G Token)
- **RPC URL**: `https://evmrpc-testnet.0g.ai`
- **Explorer**: `https://explorer.0g.ai`

### Getting 0G Testnet Tokens

You can get testnet tokens from the [0G Faucet](https://faucet.0g.ai/).

## Documentation

Visit our [0G docs](https://docs.0g.ai) to learn how to start building with 0G.

To know more about Scaffold-ETH features, check out their [website](https://scaffoldeth.io).
