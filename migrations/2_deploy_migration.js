var RFuelToken = artifacts.require("./RFuelToken.sol");

const name = "Rio Fuel Token";
const symbol = "RFuel";
const decimals = 18;
const cap = 1000000000;

module.exports = function (deployer) {
    deployer.deploy(RFuelToken, name, symbol, decimals, cap, {gas: 6700000});
};
