// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import {IERC7746} from "./IERC7746.sol";

library LibMiddleware {
    bytes32 constant ACCESS_LAYERS_STORAGE_POSITION = keccak256("lib.access.layer.storage");

    struct LayerStruct {
        address layerAddress;
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
        bytes memory layerConfigData
        // bytes4 beforeCallMethodSignature,
        // bytes4 afterCallMethodSignature
    ) internal {
        LayerStruct[] storage ls = accessLayersStorage();
        ls[layerIndex].layerAddress = layerAddress;
        ls[layerIndex].layerConfigData = layerConfigData;
    }

    function addLayer(LayerStruct memory newLayer) internal {
        LayerStruct[] storage ls = accessLayersStorage();
        ls.push(newLayer);
    }

    function setLayers(LayerStruct[] memory newLayers) internal {
        for (uint256 i = 0; i < newLayers.length; i++) {
            addLayer(newLayers[i]);
        }
    }

    function addLayer(
        address layerAddress,
        bytes memory layerConfigData
    ) internal {
        LayerStruct[] storage ls = accessLayersStorage();
        LayerStruct memory newLayer = LayerStruct({
            layerAddress: layerAddress,
            layerConfigData: layerConfigData
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
        LayerStruct[] storage ls = accessLayersStorage();
        bytes[] memory layerReturns = new bytes[](ls.length);
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
        bytes memory retval = IERC7746(layer.layerAddress).beforeCall(
            layer.layerConfigData,
            _selector,
            sender,
            value,
            data
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
            validateLayerAfterCall(ls[ls.length - 1 - i], _selector, sender, data, value, beforeCallReturns[i]);
        }
    }

    function extractRevertReason(bytes memory revertData) internal pure returns (string memory reason) {
        uint l = revertData.length;
        if (l < 68) return "";
        uint t;
        assembly {
            revertData := add(revertData, 4)
            t := mload(revertData) // Save the content of the length slot
            mstore(revertData, sub(l, 4)) // Set proper length
        }
        reason = abi.decode(revertData, (string));
        assembly {
            mstore(revertData, t) // Restore the content of the length slot
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
        IERC7746(layer.layerAddress).afterCall(
            layer.layerConfigData,
            _selector,
            sender,
            value,
            data,
            beforeCallReturnValue
        );
    }
}