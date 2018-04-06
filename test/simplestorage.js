var Collateral = artifacts.require("Collateral");
const Web3 = require('web3');

const web3 = new Web3("http://localhost:8545");

contract('Collateral', async (accounts) => {

  it("test collateral.", async () => {
    const latestAccounts = await web3.eth.getAccounts();

    const CollateralInstance = await Collateral.deployed();
    console.log(CollateralInstance,"aassAS");
     const value = web3.utils.toWei('1', 'ether');
     await CollateralInstance.depositCollateral({ from: latestAccounts[0], value: value });

  });

});
