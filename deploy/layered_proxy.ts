import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { LayeredProxy, SampleLayer } from "../types";
import { ethers } from "hardhat";
import { LibAccessLayers } from "../types/src/LayeredProxy";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer, owner } = await getNamedAccounts();

  const simpleLayer = await deployments.get("SampleLayer");
  const simpleLayerContract = (await ethers.getContractAt(
    simpleLayer.abi,
    simpleLayer.address,
  )) as SampleLayer;

  let layer: LibAccessLayers.LayerStructStruct = {
    layerAddess: simpleLayer.address,
    beforeSig: simpleLayerContract.interface.getSighash(
      simpleLayerContract.interface.functions[
        "beforeCallValidation(bytes,bytes4,address,uint256,bytes)"
      ],
    ),
    afterSig: simpleLayerContract.interface.getSighash(
      simpleLayerContract.interface.functions[
        "afterCallValidation(bytes,bytes4,address,uint256,bytes,bytes)"
      ],
    ),
    layerConfigData: "",
  };

  const result = await deploy("LayeredProxy", {
    from: deployer,
    args: [owner, [layer]],
    skipIfAlreadyDeployed: true,
  });
  console.log("deployed at", result.address);
};

export default func;
func.dependencies = ["simple_layer"];
func.tags = ["poc", "layer_proxy"];
