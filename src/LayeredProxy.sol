// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "./AccessLayers.sol";
import "./LibAccessLayers.sol";

contract LayeredProxy is TransparentUpgradeableProxy, AccessLayers {
    constructor(
        address initialOwner,
        LibAccessLayers.LayerStruct[] memory layers
    ) TransparentUpgradeableProxy(address(0), initialOwner, "") {
        LibAccessLayers.setLayers(layers);
    }

    function _fallback() internal virtual override layers(msg.sig, msg.sender, msg.data, msg.value) {
        super._fallback();
    }
}
