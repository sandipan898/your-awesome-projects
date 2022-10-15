pragma solidity ^0.8.10;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract myToken is ERC20{
    constructor(string memory tokenName, string memory tokenSymbol) ERC20(tokenName, tokenSymbol){
        _mint(msg.sender, 50 * (10**18));
    }
}
