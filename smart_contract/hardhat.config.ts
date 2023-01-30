import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "yourPrivateKey";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts

const GOERLI_PRIVATE_KEY = "yourPrivateKey";

const ETHERSCAN_API_KEY = "yourApiKey";


const config: HardhatUserConfig = {
  solidity: "0.8.17",
  paths: {
    artifacts: '../front/src/artifacts'
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
