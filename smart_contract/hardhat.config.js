
require("@nomiclabs/hardhat-ethers")

const API_URL = " https://eth-goerli.g.alchemy.com/v2/nerF10300OcjXLsR1mKE1u_ZB2QrmWZ-";

// const PUBLIC_KEY = 0x67D8783E02553E1b7d0De4768A7d7c4dA27909bb

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: ['0xe5670cb33959478656ac4c35ed9cdc60203627795cee2323f7cf54212a18a691']
    }
  }
};