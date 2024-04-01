# Smart contract layers

This is proof of concept repository that shows ability of layered approach in smart contract development

## Concept

Intead of wrapping individual methods and functionality, provide a wrapper to the contract only entry point (i.e. `fallback()`).

Make each wrapper eligible to receive complete information data (`msg.*` fields) and capable of reverting transactions per specific signatures, values, data and sender combinations.

<img width="633" alt="image" src="https://github.com/peersky/smart-contract-layers/assets/61459744/b87bf5ef-3b65-4a4a-9ae1-3be2df7f60a8">

### Layer contracts

Layer contracts are separate contracts that are agnostic from a particular protected contract and instead can accept a configuration from the caller as well as message fields and analyze them.

Such architectural decision allows for each layer to be managed by independedent security provider. Such can be upgraded and managed orthogonally and accomodate large amount of secured contracts.

## Implementation

In this proof of concept a simple rate limiter is implemented which limits number of transactions a method can be called during one block.

[LayeredProxy](https://github.com/peersky/smart-contract-layers/blob/main/src/LayeredProxy.sol) contract is modified version of TransparentUpgradeableProxy which adds a layered pattern that is defined by [LibAccessLayer](https://github.com/peersky/smart-contract-layers/blob/main/src/LibAccessLayers.sol) in form of a [modifier](https://github.com/peersky/smart-contract-layers/blob/main/src/AccessLayers.sol)

Contract protecting the implementation only needs to implement a [ILayer](https://github.com/peersky/smart-contract-layers/blob/main/src/ILayer.sol) in order to be connected

Drainer contract calls victim number of times defined by Drainer function input.

In the particular implementation rate is limited to 10 transactions per block and can be tested by `pnpm test`

### Benchmarking

Given by hardhat compiler with settings as per hardhat.config.ts. Rate limits adjusted for each column (not testing reverted gas consumption).
Tested consumption of Drainer `drain(address payable victim, uint256 cycles)` function.

Benchmark is given for RateLimiting functionality assuming that drain function can have different `cycles` argument

| First Header                         | 1 tx/block rate | 10 tx/block rate | 100 tx/block rate |
| ------------------------------------ | --------------- | ---------------- | ----------------- |
| No Layer modifier                    | 82,897          | 131,704          | 619,774           |
| Layer modifier installed (no layers) | 85,344          | 138,174          | 666,474           |
| 1 Layer call added (Interface only)  | **97,980**      | **188,034**      | **1,088,574**     |
| 1 Layer call added (Rate limiter x1) | 97,980          | 239,337          | 1,206,027         |
| 2 Layer call added (Rate limiter x2) | 153,499         | 293,647          | 1,695,127         |

_\*Bold numbers show cost to call layer contract protection wrapper that has no internal processing overhead._
