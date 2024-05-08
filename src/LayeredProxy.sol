// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "./AccessLayers.sol";
import "./LibAccessLayers.sol";

contract LayeredProxy is TransparentUpgradeableProxy, AccessLayers {
    constructor(
        address initialOwner,
        LibAccessLayers.LayerStruct[] memory layers,
        address initialImplementation
    ) TransparentUpgradeableProxy(initialImplementation, initialOwner, "") {
        LibAccessLayers.setLayers(layers);
    }

    fallback() external payable override layers(msg.sig, msg.sender, msg.data, msg.value) {
        // _delegate(_implementation()); <- this method will not return to solidity :(
        (bool success, bytes memory result) = _implementation().delegatecall(msg.data);
        require(success, string(result));
    }

    receive() external payable {
        // custom function code
    }
}
