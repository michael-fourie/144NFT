// const path = require("path");

// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*" // Match any network id
//     },
//   },
//   contracts_directory: './contracts/',
//   contracts_build_directory: './client/src/abis/',
//   compilers: {
//     solc: {
//       version: "^0.8.0",
//       optimizer: {
//         enabled: true,
//         runs: 200
//       },
//       evmVersion: "petersburg"
//     }
//   }
// };

var HDWalletProvider = require("./client/node_modules/truffle-hdwallet-provider");
const MNEMONIC = '54486e143020cd21fad781ed7df6766d92bd94c967e0c345620546711faec00a';

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/6d2cfaaa7bbf427fb1a27228b40a84ff")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './client/src/abis/',
  compilers: {
         solc: {
           version: "^0.8.0",
           optimizer: {
             enabled: true,
             runs: 200
           },
           evmVersion: "petersburg"
         }
       }
};
