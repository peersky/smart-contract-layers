// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "./AccessLayer.sol";

contract LayeredProxy is TransparentUpgradeableProxy, AccessLayer {
    constructor(address initialOwner) TransparentUpgradeableProxy(address(0), initialOwner, "") {}

    function _fallback() internal virtual override layers(msg.sig, msg.sender, msg.data, msg.value) {
        super._fallback();
    }
}
