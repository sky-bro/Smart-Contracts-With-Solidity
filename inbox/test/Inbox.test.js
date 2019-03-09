const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// const provider = ganache.provider();
// const web3 = new Web3(provider);
const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi sky!']})
    .send({ from: accounts[0], gas: '1000000' });
  // inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    let address = inbox.options.address;
    console.log(address);
    assert.ok(address);
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    console.log(message);
    assert.equal(message, 'Hi sky!');
  });

  it('can change the message', async () => {
    const txHash = await inbox.methods.setMsg('Hello sky!').send({from: accounts[0]});
    console.log('txHash', txHash);
    const message = await inbox.methods.message().call();
    console.log('message', message);
    assert.equal(message, 'Hello sky!');
  });
});
