import { expect } from "chai";
import { ethers, waffle } from "hardhat";

const helper = async (victim: any) => {
  const provider = waffle.provider;
  await victim.unlock(await provider.getStorageAt(victim.address, 1));
};

export default helper;
