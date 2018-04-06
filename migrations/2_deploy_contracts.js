var Collateral = artifacts.require("./Collateral.sol");
var SafeMath = artifacts.require("./SafeMath.sol");


module.exports = async (deployer) => {
  await deployer.deploy(SafeMath);
  await deployer.link(SafeMath, Collateral);
  await deployer.deploy(Collateral);
};
