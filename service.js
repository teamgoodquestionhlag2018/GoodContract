require('dotenv').config();
const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/965ee4fbd20446ce9cd9dfa60fdec01d'));

const myAddress = '0xF3530d757Ce7d04346cFAfF09814BD669b532313';
const privateKey = Buffer.from(process.env.KEY, 'hex');
const toAddress = '0xb63E0Ba23CE85F46e21AbD3fCD57cf6b3E38F28E';

const YOUR_CONTRACT_ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "getOwner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newMessage",
        "type": "string"
      },
      {
        "name": "newMessage2",
        "type": "string"
      }
    ],
    "name": "setMessage",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getMessage",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];

//contract abi is the array that you can get from the ethereum wallet or etherscan
const contractABI = YOUR_CONTRACT_ABI;
const contractAddress = '0xe01a9f512082deea45c59593611e975883dcbbcc';
//creating contract object
const contract = new web3.eth.Contract(contractABI, contractAddress);

let count;
// get transaction count, later will used as nonce
module.exports = (proposal, callback) => web3.eth.getTransactionCount(myAddress).then(function (v) {
  console.log('Count: ' + v);
  count = v;

  const rawTransaction = {
    'from': myAddress,
    'gasPrice': web3.utils.toHex(20 * 1e9),
    'gasLimit': web3.utils.toHex(60000),
    'to': contractAddress,
    'value': '0x0',
    'data': contract.methods.setMessage(proposal.id, 'Bazooka').encodeABI(),
    'nonce': web3.utils.toHex(count)
  };

  const transaction = new Tx(rawTransaction);

  transaction.sign(privateKey);

  web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
    .on('transactionHash', (...args) => console.log('args', args))
    .on('receipt', () => callback());
});
