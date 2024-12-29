# Web3 Money Transfer App

A decentralized application (DApp) that allows users to transfer funds seamlessly between Ethereum accounts on the Sepolia testnet. Built with cutting-edge Web3 technologies, this app demonstrates secure, transparent, and efficient peer-to-peer transactions.

## Features

- **Secure Transactions**: Transfers money directly between Ethereum wallets without intermediaries.
- **Smart Contract Integration**: Powered by a Solidity smart contract deployed on the Sepolia network.
- **User-Friendly Interface**: Intuitive UI for managing transactions.
- **Testnet Compatibility**: Uses the Sepolia Ethereum testnet for development and testing.

## Tech Stack

- **Frontend**: React.js
- **Smart Contracts**: Solidity
- **Blockchain Interaction**: Ethers.js

## Installation and Setup

Follow these steps to get the project running locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/web3-money-transfer-app.git
   cd web3-money-transfer-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   REACT_APP_INFURA_API_URL=<YOUR_INFURA_ENDPOINT>
   REACT_APP_PRIVATE_KEY=<YOUR_WALLET_PRIVATE_KEY>
   REACT_APP_CONTRACT_ADDRESS=<DEPLOYED_CONTRACT_ADDRESS>
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

## Smart Contract

The application uses a Solidity smart contract to manage transactions. Here is a brief overview:

```solidity
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;
    ....
    function getAllTransactions() public view returns (TransferStruct[] memory){
        return transactions;
    }

    function getTransactionCount() public view returns (uint256){
        return transactionCount;

    }

}
```

The contract is deployed on the Sepolia network. You can find the contract's ABI and deployment details in the `src/contracts` directory.

## Usage

1. **Connect Wallet**: Users can connect their MetaMask wallet to interact with the app.
2. **Enter Details**: Provide the recipient's Ethereum address and the amount to transfer.
3. **Submit Transaction**: Confirm the transaction through MetaMask.
4. **Transaction History**: View completed transactions.

## Screenshots

![Home Page](./screenshots/home.png)
![Transaction Page](./screenshots/transaction.png)

## Testnet Details

- **Network**: Ethereum Sepolia Testnet
- **Faucet**: [Get Sepolia ETH](https://sepoliafaucet.com)



---

**Note**: This application is for educational purposes and uses the Sepolia testnet.
