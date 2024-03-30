// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./ILayer.sol";

contract SampleLayer is ILayer {
    mapping(uint256 => bool) enteredLayer;
    uint256 nonce;

    function simpleContractWideReentrancyEnter() private returns (uint256) {
        require(!enteredLayer[nonce], "reentrancy caught!");
        enteredLayer[nonce] = true;
        return nonce;
    }

    function simpleContractWideReentrancyExit() private {
        nonce++;
    }

    function beforeCallValidation(
        bytes memory,
        bytes4,
        address,
        uint256,
        bytes memory
    ) external returns (bytes memory) {
        return bytes.concat(bytes32(simpleContractWideReentrancyEnter()));
    }

    function afterCallValidation(bytes memory, bytes4, address, uint256, bytes memory, bytes memory) external {
        simpleContractWideReentrancyExit();
    }
}
