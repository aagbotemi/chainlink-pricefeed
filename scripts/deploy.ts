import { ethers } from "hardhat";

async function main() {
  const PriceFeed = await ethers.getContractFactory("PriceConsumerV3");
  const price = await PriceFeed.deploy();
  await price.deployed();

  console.log("Address is: ", price.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
