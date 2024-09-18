import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { RecoverableFuse } from "../types";
import { ethers } from "hardhat";
import { LibMiddleware } from "../types/src/MiddlewareProxy";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer, owner } = await getNamedAccounts();

  const simpleLayer = await deployments.get("RecoverableFuse");

  let layer: LibMiddleware.LayerStructStruct = {
    layerAddress: simpleLayer.address,
    layerConfigData: ethers.utils.defaultAbiCoder.encode(["uint256"], [10]),
  };

  const result = await deploy("MockERC20", {
    from: deployer,
    args: [],
    skipIfAlreadyDeployed: true,
  });

  const lp = await deploy("MiddlewareProxy", {
    from: deployer,
    args: [[layer], result.address],
    skipIfAlreadyDeployed: true,
  });
};

export default func;
func.dependencies = ["simple_layer"];
func.tags = ["poc", "layer_proxy"];
