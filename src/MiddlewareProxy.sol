// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (proxy/Proxy.sol)
import "./ERC7746Middleware.sol";
import "./LibMiddleware.sol";
pragma solidity ^0.8.20;

/**
 * @dev This abstract contract provides a fallback function that delegates all calls to another contract using the EVM
 * instruction `delegatecall`. We refer to the second contract as the _implementation_ behind the proxy, and it has to
 * be specified by overriding the virtual {_implementation} function.
 *
 * Additionally, delegation to the implementation can be triggered manually through the {_fallback} function, or to a
 * different contract through the {_delegate} function.
 *
 * The success and return data of the delegated call will be returned back to the caller of the proxy.
 */
contract MiddlewareProxy is ERC7746Middleware {
    address immutable implementationAddress;

    constructor (LibMiddleware.LayerStruct[] memory layers, address implementation) {
        implementationAddress = implementation;
        LibMiddleware.setLayers(layers);
    }



    /**
     * @dev This is a virtual function that should be overridden so it returns the address to which the fallback
     * function and {_fallback} should delegate.
     */
    function _implementation() internal view  returns (address)
    {
        return implementationAddress;
    }

    /**
     * @dev Delegates the current call to the address returned by `_implementation()`.
     *
     * This function does not return to its internal call site, it will return directly to the external caller.
     */
    function _fallback() internal virtual {
        (bool success, bytes memory result) = _implementation().delegatecall(msg.data);
        require(success, string(result));
    }

    /**
     * @dev Fallback function that delegates calls to the address returned by `_implementation()`. Will run if no other
     * function in the contract matches the call data.
     */
    fallback() external payable virtual ERC7746 {
        _fallback();
    }
}
