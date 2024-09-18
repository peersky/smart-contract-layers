# Smart contract layers

This is proof of concept repository intended to demonstrate the ability of layered approach in smart contract development to encapsulate security tasks to the layers that act as middleware.

## Concept

Provide a wrapper(s) to the contract only entry point (i.e. `fallback()`) access management.

Make each wrapper eligible to receive complete information data (`msg.*` fields) via standardized API. Rely on wrappers to revert transactions per their internal logic conditions.

<img width="633" alt="image" src="https://github.com/peersky/smart-contract-layers/assets/61459744/b87bf5ef-3b65-4a4a-9ae1-3be2df7f60a8">

### Layer contracts

Layer contracts are separate middlewares that are agnostic from a particular protected contract and can accept a configuration from the caller as well as message fields and analyze them. If layer is failing to validate inputs it must revert.

Such architectural decision allows for each layer to be managed by independent security provider. Such can be upgraded and managed orthogonally and accommodate large amount of secured contracts.

#### Initialization

![init](./docs/initialize.png)

#### Operation

![init](./docs/operate.png)

## Implementation

In this proof of concept a simple rate limiter is implemented which limits number of transactions a method can be called during one block, reducing ability to drain contract funds.

[ERC7746Middleware](https://github.com/peersky/smart-contract-layers/blob/main/src/Protected.sol) contract is modified version of Proxy which adds a layered pattern that is defined by [LibMiddleware](https://github.com/peersky/smart-contract-layers/blob/main/src/LibMiddleware.sol) in form of a [modifier](https://github.com/peersky/smart-contract-layers/blob/main/src/ERC7746Middleware.sol)

Contract protecting the implementation only needs to implement a [IERC7746](https://github.com/peersky/smart-contract-layers/blob/main/src/IERC7746.sol) in order to be connected

Drainer contract calls victim number of times defined by Drainer function input.

In the particular implementation rate is limited to 10 transactions per block and can be tested by `pnpm test`


## Implementing your layer

Layer contract should only implement simple ILayer interface:

```solidity
// SPDX-License-Identifier: CC0-1.0
pragma solidity >=0.8.0 <0.9.0;

interface IERC7746 {
    /// @notice Validates a function call before execution.
    /// @param configuration Layer-specific configuration data.
    /// @param selector The function selector being called.
    /// @param sender The address initiating the call.
    /// @param value The amount of ETH sent with the call (if any).
    /// @param data The calldata for the function call.
    /// @return beforeCallResult Arbitrary data to be passed to `afterCallValidation`.
    /// @dev MUST revert if validation fails.
    function beforeCall(
        bytes memory configuration,
        bytes4 selector,
        address sender,
        uint256 value,
        bytes memory data
    ) external returns (bytes memory);

    /// @notice Validates a function call after execution.
    /// @param configuration Layer-specific configuration data.
    /// @param selector The function selector being called.
    /// @param sender The address initiating the call.
    /// @param value The amount of ETH sent with the call (if any).
    /// @param data The calldata for the function call.
    /// @param beforeCallResult The data returned by `beforeCallValidation`.
    /// @dev MUST revert if validation fails.
    function afterCall(
        bytes memory configuration,
        bytes4 selector,
        address sender,
        uint256 value,
        bytes memory data,
        bytes memory beforeCallResult
    ) external;
}
```
## Protecting with a layer

1. Add layers per your needs (in constructor, initializer etc)
2. Wrap protected state access with layer modifier (fallback function for proxies)

Reference implementation of [MiddlewareProxy](https://github.com/peersky/smart-contract-layers/blob/main/src/MiddlewareProxy.sol):


