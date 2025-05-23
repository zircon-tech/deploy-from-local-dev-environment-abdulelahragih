## Unit 3: Ethereum | Local Development Environments -English Version- 🚀

### What's this project about?

This project involves creating a simple smart contract, testing it in a local Ethereum development environment using Hardhat, and preparing it for deployment to an Ethereum testnet. The smart contract developed is a `MessageStorage` contract that allows an owner to store and retrieve a string message, with access restricted to the owner. The contract has been deployed to the Sepolia testnet and can be viewed and verified on Etherscan: [https://sepolia.etherscan.io/address/0xbe48fA9c765F2291387F3C0cDf48D3e4Ff38448E](https://sepolia.etherscan.io/address/0xbe48fA9c765F2291387F3C0cDf48D3e4Ff38448E)

### Development Setup (English)

This project uses **Hardhat** as the local Ethereum development environment. 

To set up the project locally:

1.  **Clone the repository.**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or if you use Yarn:
    ```bash
    yarn install
    ```
3.  **Compile the smart contracts:**
    ```bash
    npx hardhat compile
    ```
4.  **Run the tests:**
    ```bash
    npx hardhat test
    ```