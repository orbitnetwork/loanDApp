var Collateral = artifacts.require("./Collateral.sol");
var SafeMath = artifacts.require("./SafeMath.sol");


module.exports = (deployer) => {
  deployer.deploy(SafeMath).then(async(params) => {
    await deployer.link(SafeMath, Collateral);
  await deployer.deploy(Collateral);
  });
  
};
