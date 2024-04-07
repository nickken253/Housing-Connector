const express = require('express');
const { ethers } = require('ethers');
const fs = require('fs');

// Initialize Express
const app = express();
app.use(express.json());

// Read and parse the contract JSON
const contractJSON = JSON.parse(fs.readFileSync("build/contracts/RealEstate.json", "utf-8"));

// Get the contract address
const contractAddress = fs.readFileSync("contract-address.txt", "utf-8");

// Connect to the local Ethereum node
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

// Get the signer
const signer = provider.getSigner();

// Create a new contract instance
const contract = new ethers.Contract(contractAddress, contractJSON.abi, signer);

app.post('/buyProperty', async (req, res) => {
    const { location, price } = req.body;

    // TODO: Use the location variable as needed. The current contract method does not require it.

    // Convert the price to Wei (the smallest unit of Ether)
    const priceInWei = ethers.utils.parseEther(price.toString());

    // Call the buyProperty function with the price as the value
    const transaction = await contract.buyProperty({ value: priceInWei });
    await transaction.wait();

    res.send('Property bought successfully');
});

app.listen(3000, () => console.log('API is listening on port 3000'));