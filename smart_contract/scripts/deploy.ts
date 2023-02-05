import { ethers } from "hardhat";

async function main() {
  const WAIT_BLOCK_CONFIRMATIONS = 6

  //Token Contract

  console.log("Deployment of yourToken")

  const YourToken = await ethers.getContractFactory("YourToken")
  const yourToken = await YourToken.deploy()

  await yourToken.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS)


  await yourToken.deployed()

  console.log(`Contract deployed to ${yourToken.address}`)

  try {
    console.log(`Verifying contract on Etherscan...`)
    await run(`verify:verify`, {
      address: yourToken.address,
      constructorArguments: [],
    })
  } catch (err: any) {
    console.log(err.message)
  }

  //Update web3constants.tsx file with new parameters

  const fs = require('fs');

  const filePath = '../front/src/utils/web3constants.tsx';
  const fileContent = `
export const yourTokenAddress: string = "${yourToken.address}"
`;

  fs.writeFileSync(filePath, fileContent, {flag: 'w'});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
