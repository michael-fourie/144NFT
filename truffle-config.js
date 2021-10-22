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
const MNEMONIC = 'f52475b7f816d41450b4a80b6cfaf6a2429423367f0c3c9e5e31e30988d90f5d';

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
