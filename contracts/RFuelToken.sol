pragma solidity ^0.5.3;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol";

contract RFuelToken is ERC20, ERC20Pausable, ERC20Detailed, ERC20Mintable, ERC20Burnable, ERC20Capped {

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 cap
    )
        ERC20Burnable()
        ERC20Mintable()
        ERC20Detailed(name, symbol, decimals)
        ERC20Capped(cap * (10**uint256(decimals)))
        ERC20()
        public
    {}
}
