const fs = require('fs');
const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');

const infuraKey = fs.readFileSync(".infuraKey").toString().trim();
const mnemonic = fs.readFileSync(".secret").toString().trim();
const fromAddress = fs.readFileSync(".fromAddress").toString().trim();

module.exports = {
    contracts_build_directory: path.join(__dirname, "client/src/contracts"),
    networks: {
        live: {
            provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraKey}`),
            network_id: 1,
            gas: 5500000,
            from: fromAddress,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            production: true
        },
        ropsten: {
            provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
            network_id: 3,
            gas: 5500000,
            from: fromAddress,
            confirmations: 2,
            timeoutBlocks: 200000,
            skipDryRun: true,
            production: true
        },
        // development:{
        //   host:"localhost",
        //   port:8545,
        //   network_id:'*',
        //   gas: 5500000
        // }
    },
    mocha: {
    },

    compilers: {
        solc: {
             version: "0.5.3",    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            // settings: {          // See the solidity docs for advice about optimization and evmVersion
            //  optimizer: {
            //    enabled: false,
            //    runs: 200
            //  },
            //  evmVersion: "byzantium"
            // }
        }
    }
}
