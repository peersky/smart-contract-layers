/* global  ethers */

import { deployments, ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

import { expect } from "chai";
import { Drainer, LayeredProxy, MockERC20 } from "../types";

const setupTest = deployments.createFixture(
  async ({ deployments, getNamedAccounts, ethers: _eth }, options) => {
    const { deployer, owner } = await getNamedAccounts();
    await deployments.fixture(["poc"]);
    console.warn(deployer, owner);
    const c = await deployments.get("LayeredProxy");
    const d = await deployments.get("Drainer");
    return {
      owner,
      deployer,
      victim: (await ethers.getContractAt(c.abi, c.address)) as LayeredProxy,
      attacker: (await ethers.getContractAt(d.abi, d.address)) as Drainer,
    };
  },
);

describe("test drainage", async function () {
  let env: {
    owner: string;
    deployer: string;
    victim: LayeredProxy;
    attacker: Drainer;
  };
  beforeEach(async function () {
    env = await setupTest();
  });
  it("succeeds below 10 transactions", async () => {
    await expect(env.attacker.drain(env.victim.address, 1)).to.emit(
      env.victim,
      "BalanceReduced",
    );
  });
  it("fails beyond 10 transactions", async () => {
    await expect(env.attacker.drain(env.victim.address, 11)).to.be.revertedWith(
      "Out of quota this block",
    );
  });
});
