var Utility144NFT = artifacts.require("../contracts/Utility144NFT.sol");
var onefourfour = artifacts.require("../contracts/ONEFOURFOURNFT.sol");


module.exports = function(deployer) {
  deployer.deploy(onefourfour).then(function() {
    return deployer.deploy(Utility144NFT, onefourfour.address);
  })
};
