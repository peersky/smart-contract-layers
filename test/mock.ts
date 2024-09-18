/* global  ethers */

import { deployments, ethers } from "hardhat";

import { expect } from "chai";
import { Drainer, MockERC20 } from "../types";

const setupTest = deployments.createFixture(
  async ({ deployments, getNamedAccounts, ethers: _eth }, options) => {
    const { deployer, owner } = await getNamedAccounts();
    await deployments.fixture(["poc"]);
    console.warn(deployer, owner);
    const c = await deployments.get("MiddlewareProxy");
    const token = await deployments.get("MockERC20");
    const d = await deployments.get("Drainer");
    return {
      owner,
      deployer,
      victim: (await ethers.getContractAt(token.abi, c.address)) as MockERC20,
      attacker: (await ethers.getContractAt(d.abi, d.address)) as Drainer,
    };
  },
);

describe("test drainage", async function () {
  let env: {
    owner: string;
    deployer: string;
    victim: MockERC20;
    attacker: Drainer;
  };
  beforeEach(async function () {
    env = await setupTest();
  });
  it("succeeds below 10 transactions", async () => {
    await expect(env.attacker.drain(env.victim.address, 1)).to.emit(
      env.victim,
      "Transfer",
    );
  });
  it("fails beyond 10 transactions", async () => {
    await expect(env.attacker.drain(env.victim.address, 11)).to.be.revertedWith(
      "Out of quota this block",
    );
  });
});
