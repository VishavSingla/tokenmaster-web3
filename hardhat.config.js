// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "",
      accounts: [""],
    },
    goerli: {
      url: "#",
      accounts: ["#"],
    },
    localhost: {
      url: "http://127.0.0.1:8545/", 
      accounts:['689a13efa8c651a91ad28760212e333af2fe9f6501a7ac4b061667b5a93e037fd']
    },
  },
};
