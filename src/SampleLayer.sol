// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./ILayer.sol";

contract RecoverableFuse is ILayer {
    mapping(address => mapping(bytes4 => uint256)) usage;
    mapping(address => mapping(bytes4 => uint256)) usageUpdatedAtBlock;

    function beforeCallValidation(
        bytes memory,
        bytes4 messageSig,
        address,
        uint256,
        bytes memory
    ) public returns (bytes memory) {
        if (usageUpdatedAtBlock[msg.sender][messageSig] != block.number) {
            usage[msg.sender][messageSig] = 0;
            usageUpdatedAtBlock[msg.sender][messageSig] = block.number;
        } else {
            usage[msg.sender][messageSig] += 1;
        }
        return "";
    }

    function afterCallValidation(
        bytes memory layerConfig,
        bytes4 messageSig,
        address,
        uint256,
        bytes memory,
        bytes memory
    ) public view {
        uint256 blockQuota = uint256(bytes32(layerConfig));
        require(usage[msg.sender][messageSig] < blockQuota, "Out of quota this block");
    }
}
