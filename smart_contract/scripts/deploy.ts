import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);


  //Contract Verification
  try {
    console.log(`Verifying contract on Etherscan...`)
    await run(`verify:verify`, {
      address: lock.address,
      constructorArguments: [unlockTime, { value: lockedAmount }],
    })
  } catch (err: any) {
    console.log(err.message)
  }

  //Updater web3constants.tsx file with new parameters

  const fs = require('fs');

  const filePath = '../front/src/utils/web3constants.tsx';
  const fileContent = `
export const lockAddress: string = "${lock.address}"
`;

  fs.writeFileSync(filePath, fileContent, {flag: 'w'});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
