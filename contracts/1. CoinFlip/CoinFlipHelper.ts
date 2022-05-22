import { expect } from "chai";
import { ethers } from "hardhat";

const helper = async (victim: any, attacker: any) => {
	for (var i = 0; i < 10; i++) {
		await attacker.hackContract();
	}
};

export default helper;
