const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// const provider = ganache.provider();
// const web3 = new Web3(provider);
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');

let accounts;
let lottery;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode})
    .send({ from: accounts[0], gas: '1000000' });
  // inbox.setProvider(provider);
});

describe('Lottery Contract', () => {
  it('deploys a contract', async () => {
    assert.ok(lottery.options.address);
  });
});
