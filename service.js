const Web3 = require('web3');
const Tx = require('ethereumjs-tx');

const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/965ee4fbd20446ce9cd9dfa60fdec01d'));

const myAddress = '0xF3530d757Ce7d04346cFAfF09814BD669b532313';
const privateKey = Buffer.from('bd4e7a6e26c7321b94354ec172f15de4aeedad96cd0435c1b0728ac7d82fb153', 'hex');
const toAddress = '0xb63E0Ba23CE85F46e21AbD3fCD57cf6b3E38F28E';

const YOUR_CONTRACT_ABI = [{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"setToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cutie","type":"uint256"},{"name":"newOwner","type":"address"}],"name":"transfer2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];

//contract abi is the array that you can get from the ethereum wallet or etherscan
const contractABI = YOUR_CONTRACT_ABI;
const contractAddress = '0x7971e6F4F46e1A19B9d7C14628B5e68cff050198';
//creating contract object
const contract = new web3.eth.Contract(contractABI, contractAddress);

let count;
// get transaction count, later will used as nonce
web3.eth.getTransactionCount(myAddress).then(function (v) {
  console.log('Count: ' + v);
  count = v;
  var amount = web3.utils.toHex(1e16);
  //creating raw tranaction
  const rawTransaction = {
    'from': myAddress,
    'gasPrice': web3.utils.toHex(20 * 1e9),
    'gasLimit': web3.utils.toHex(210000),
    'to': contractAddress,
    'value': '0x0',
    'data': contract.methods.transfer2(amount, toAddress).encodeABI(),
    'nonce': web3.utils.toHex(count)
  };
  console.log(rawTransaction);
  //creating tranaction via ethereumjs-tx
  var transaction = new Tx(rawTransaction);
  //signing transaction with private key
  transaction.sign(privateKey);
  //sending transacton via web3 module
  web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
    .on('transactionHash', console.log);

  contract.methods.isConfig.call()
    .then(function (balance) {
      console.log(balance);
    });
});
