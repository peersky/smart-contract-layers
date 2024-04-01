// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "./AccessLayers.sol";
import "./LibAccessLayers.sol";

contract LayeredProxy is TransparentUpgradeableProxy, AccessLayers {
    uint256 balance = 10000000 ether;

    constructor(
        address initialOwner,
        LibAccessLayers.LayerStruct[] memory layers,
        address initialImplementation
    ) TransparentUpgradeableProxy(initialImplementation, initialOwner, "") {
        LibAccessLayers.setLayers(layers);
    }

    event BalanceReduced(uint256 indexed newBalance);

    function drainedMethod() private {
        balance--;

        emit BalanceReduced(balance);
    }

    fallback() external payable override layers(msg.sig, msg.sender, msg.data, msg.value) {
        drainedMethod();
    }

    receive() external payable {
        // custom function code
    }
}
