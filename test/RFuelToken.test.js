const RFuelToken = artifacts.require('RFuelToken');
contract('RFuelToken', accounts => {
    let token;
    const creator = accounts[0];
    beforeEach(async function () {
        token = await RFuelToken.new("Rio Fuel Test Token", "RFuel", 18);
    });
    it('has a name', async function () {
        const name = await token.name();
        assert.equal(name, 'Rio Fuel Test Token');
    });
    it('has a symbol', async function () {
        const symbol = await token.symbol();
        assert.equal(symbol, 'RFuel');
    });
    it('has 3 decimals', async function () {
        const decimals = await token.decimals();
        assert.equal(decimals, 18);
    });
});
