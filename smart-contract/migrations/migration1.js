const transaction = artifacts.require("APIConsumer");

module.exports = function(deployer) {
    deployer.deploy(transaction);
};