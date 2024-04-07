const fs = require('fs');
const ethers = require('ethers');




const contractJSON = JSON.parse(fs.readFileSync('build/contracts/RealEstate.json', 'utf8'));
const contractABI = contractJSON.abi;
const contractAddress = fs.readFileSync('contract-address.txt', 'utf-8');

const provider = new JsonRpcProvider('http://localhost:8545');

const contract = new ethers.Contract(contractAddress, contractABI, provider);

async function getTransactionsCount() {
    const count = await contract.getTransactionsCount();
    console.log("Transaction count:", count.toString());
}