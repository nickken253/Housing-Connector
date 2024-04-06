const { ethers } = require("ethers");
const fs = require("fs");

async function main() {
    // Connect to the local Ethereum node
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

    // Get the signer
    const signer = provider.getSigner();

    // Read and parse the contract JSON
    const contractJSON = JSON.parse(fs.readFileSync("build/contracts/RealEstate.json", "utf-8"));

    // Get the contract address
    const contractAddress = fs.readFileSync("contract-address.txt", "utf-8");

    // Create a new contract instance
    const contract = new ethers.Contract(contractAddress, contractJSON.abi, signer);

    // Call the getAllTransactions function
    const allTransactions = await contract.getAllTransactions();

    // Log all transactions
    console.log(allTransactions);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });