import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const result = await deploy("SampleLayer", {
    from: deployer,
    args: [],
    skipIfAlreadyDeployed: true,
  });
  console.log("deployed at", result.address);
};

export default func;
func.tags = ["poc", "simple_layer"];
