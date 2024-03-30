// SPDX-License-Identifier: Apache-2.0

/**
 * Author: @Peersky https://github.com/peersky
 */

pragma solidity ^0.8.20;
import "./LibAccessLayer.sol";

abstract contract AccessLayer {
    modifier layers(
        bytes4 _selector,
        address sender,
        bytes calldata data,
        uint256 value
    ) {
        bytes[] memory layerReturns = LibAccessLayer.beforeCall(_selector, sender, data, value);
        _;
        LibAccessLayer.afterCall(_selector, sender, data, value, layerReturns);
    }
}
