// smart-contract/deploy.js

// Deployment script for SkillLink contract
const { ethers } = require("ethers");
require('dotenv').config();

async function deployContract() {
    // Replace with your Infura/Alchemy URL and private key
    const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    
    // Contract bytecode and ABI (get from Remix compilation)
    const contractFactory = new ethers.ContractFactory(CONTRACT_ABI, CONTRACT_BYTECODE, wallet);
    
    console.log("Deploying SkillLink contract...");
    const contract = await contractFactory.deploy();
    
    console.log("Contract deployed to:", contract.address);
    console.log("Transaction hash:", contract.deployTransaction.hash);
    
    // Wait for confirmation
    await contract.deployed();
    console.log("Contract confirmed!");
    
    return contract.address;
}

deployContract().catch(console.error);