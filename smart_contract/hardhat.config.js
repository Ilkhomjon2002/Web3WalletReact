require("@nomiclabs/hardhat-ethers");

const url = process.env.URL;
const account = process.env.ACCOUNT;
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url,
      accounts: [account],
    },
  },
};
