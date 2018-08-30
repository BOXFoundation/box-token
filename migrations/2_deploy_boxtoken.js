var HAToken = artifacts.require("./BOXToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BOXToken);
};
