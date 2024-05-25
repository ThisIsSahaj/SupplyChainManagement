const hre = require("hardhat");

async function main() {

    const Tracking = await hre.ethers.getContractFactory("Tracking");
    const tracking = await Tracking.deploy();

    await tracking.deployed();
    console.log(`Tracking deployed to ${tracking.address}`);

    // const Tracking = await hre.ethers.getContractFactory("Tracking");
    // const tracking = await Tracking.deploy(); // Added 'await' and corrected syntax
    // await tracking.deployed();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});