// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

pragma solidity ^0.8.0;

contract MockERC20 is ERC20BurnableUpgradeable, OwnableUpgradeable {
    constructor() {
        initialize("Mock", "MOCK");
    }
    function initialize(string memory name, string memory symbol) public initializer {
        __ERC20_init(name, symbol);
        __Ownable_init(msg.sender);
    }

    function mint(address to, uint256 amount) public {
        require(to != address(0), "MockERC20->mint: Address not specified");
        require(amount != 0, "MockERC20->mint: amount not specified");
        _mint(to, amount);
    }
}
