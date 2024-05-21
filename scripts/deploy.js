const hre = require("hardhat");

async function main() {
    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(unlockTime ,{ value : lockedAmount});

    await lock.deployed();

    console     
}