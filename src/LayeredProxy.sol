// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "./AccessLayer.sol";
import "./LibAccessLayer.sol";

contract LayeredProxy is TransparentUpgradeableProxy, AccessLayer {
    constructor(
        address initialOwner,
        LibAccessLayer.LayerStruct[] memory layers
    ) TransparentUpgradeableProxy(address(0), initialOwner, "") {
        LibAccessLayer.setLayers(layers);
    }

    function _fallback() internal virtual override layers(msg.sig, msg.sender, msg.data, msg.value) {
        super._fallback();
    }
}
