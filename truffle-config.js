const HDWalletProvider = require('truffle-hdwallet-provider')
const { wrapProvider } = require('arb-ethers-web3-bridge')
require('dotenv').config();

mnemonic = process.env.KEY_MNEMONIC;
infuraApiKey = process.env.KEY_INFURA_API_KEY;

module.exports = {	
  networks: {	
    rpc: {	
      network_id: '*',	
      host: 'localhost',	
      port: 8545,	
      gas: 9000000,	
      gasPrice: 10000000000 //10 Gwei	
    },	
    develop: {	
      network_id: '66',	
      host: 'localhost',	
      port: 8545,	
      gas: 9000000,	
      gasPrice: 10000000000 //10 Gwei	
    },	
    mainnet: {	
      provider: function () {	
        return new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraApiKey}`)	
      },	
      network_id: '1',	
      gas: 9000000,	
      gasPrice: 10000000000 //10 Gwei	
    },	
    rinkeby: {	
      provider: function () {	
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraApiKey}`)	
      },	
      network_id: '4',	
      gas: 9000000,	
      gasPrice: 10000000000 //10 Gwei	
    },	
    // USE YOUR CUSTOM CONFIG HERE. eg"matic" 
  },	
  build: {},	
  compilers: {	
    solc: {	
      version: '0.6.6',
      settings: {
        evmVersion: 'istanbul',
      }
    }
  },	
  solc: {	
    optimizer: {	
      enabled: true,	
      runs: 200	
    }
  },	
}
