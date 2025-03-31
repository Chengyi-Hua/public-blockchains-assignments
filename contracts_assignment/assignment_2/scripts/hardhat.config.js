require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    unima: {
      url: process.env.UNIMA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    // Optional: you can include goerli or sepolia if needed
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
