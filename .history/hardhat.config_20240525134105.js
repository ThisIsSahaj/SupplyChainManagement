// hardhat.config.js
require("@nomiclabs/hardhat-waffle");
module.exports = {
    solidity: {
      compilers: [
        {
          version: "0.8.0",
        },
        // You can add more versions if needed
        {
          version: "0.8.4",
        },
        {
          version: "0.7.0",
        }
      ],
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  };
  