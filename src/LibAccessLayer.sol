// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "hardhat/console.sol";

library LibAccessLayer {
    bytes32 constant ACCESS_LAYERS_STORAGE_POSITION = keccak256("lib.access.layer.storage");

    struct LayerStruct {
        address layerAddess;
        bytes4 beforeSig;
        bytes4 afterSig;
        bytes layerConfigData;
    }

    function accessLayersStorage() internal pure returns (LayerStruct[] storage ls) {
        bytes32 position = ACCESS_LAYERS_STORAGE_POSITION;
        assembly {
            ls.slot := position
        }
    }

    function setLayer(
        address layerAddress,
        uint256 layerIndex,
        bytes memory layerConfigData,
        bytes4 beforeCallMethodSignature,
        bytes4 afterCallMethodSignature
    ) internal {
        LayerStruct[] storage ls = accessLayersStorage();
        ls[layerIndex].layerAddess = layerAddress;
        ls[layerIndex].layerConfigData = layerConfigData;
        ls[layerIndex].beforeSig = beforeCallMethodSignature;
        ls[layerIndex].afterSig = afterCallMethodSignature;
    }

    function addLayer(
        address layerAddress,
        bytes memory layerConfigData,
        bytes4 beforeCallMethodSignature,
        bytes4 afterCallMethodSignature
    ) internal {
        LayerStruct[] storage ls = accessLayersStorage();
        LayerStruct memory newLayer = LayerStruct({
            layerAddess: layerAddress,
            layerConfigData: layerConfigData,
            beforeSig: beforeCallMethodSignature,
            afterSig: afterCallMethodSignature
        });
        ls.push(newLayer);
    }

    function popLayer() internal {
        LayerStruct[] storage ls = accessLayersStorage();
        ls.pop();
    }

    function getLayer(uint256 layerIdx) internal view returns (LayerStruct storage) {
        LayerStruct[] storage ls = accessLayersStorage();
        return ls[layerIdx];
    }

    function beforeCall(
        bytes4 _selector,
        address sender,
        bytes calldata data,
        uint256 value
    ) internal returns (bytes[] memory) {
        bytes[] memory layerReturns;
        LayerStruct[] storage ls = accessLayersStorage();
        for (uint256 i = 0; i < ls.length; i++) {
            layerReturns[i] = validateLayerBeforeCall(ls[i], _selector, sender, data, value);
        }
        return layerReturns;
    }

    function validateLayerBeforeCall(
        LayerStruct storage layer,
        bytes4 _selector,
        address sender,
        bytes memory data,
        uint256 value
    ) internal returns (bytes memory) {
        (, bytes memory retval) = (
            layer.layerAddess.call(
                abi.encodeWithSelector(layer.beforeSig, layer.layerConfigData, _selector, sender, value, data)
            )
        );
        return retval;
    }

    function afterCall(
        bytes4 _selector,
        address sender,
        bytes calldata data,
        uint256 value,
        bytes[] memory beforeCallReturns
    ) internal {
        LayerStruct[] storage ls = accessLayersStorage();
        for (uint256 i = 0; i < ls.length; i++) {
            validateLayerAfterCall(ls[i], _selector, sender, data, value, beforeCallReturns[i]);
        }
    }

    function validateLayerAfterCall(
        LayerStruct storage layer,
        bytes4 _selector,
        address sender,
        bytes calldata data,
        uint256 value,
        bytes memory beforeCallReturnValue
    ) internal {
        (bool success, ) = layer.layerAddess.call(
            abi.encodeWithSelector(
                layer.afterSig,
                layer.layerConfigData,
                _selector,
                sender,
                value,
                data,
                beforeCallReturnValue
            )
        );
        require(success, "after call failed");
    }
}
