import { ethers } from "hardhat";

async function main() {
  const PriceFeed = await ethers.getContractFactory("PriceConsumerV3");
  const price = await PriceFeed.attach("0xbcBA59d570a0FC7aC48cAC6a87f5179c1ECd104D")
  
  const getLatestPrice = await price.getLatestPrice();
  console.log("GET LATEST PRICE: ", getLatestPrice);

  const setLatestDynamicPrice = await (await price.setLatestDynamicPrice("0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e")).wait();
  console.log("GET LATEST PRICE: ", setLatestDynamicPrice);

  const getLatestDynamicPrice = await price.getLatestDynamicPrice();
  console.log("GET LATEST PRICE: ", getLatestDynamicPrice);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
