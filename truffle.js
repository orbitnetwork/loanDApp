var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "crazy shop lamp success blind certain project acid market sand club balcony";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/QWMgExFuGzhpu2jUr6Pq")
      },
      network_id: 3,
      gas:'4700000'
    }  
    
  }
};
