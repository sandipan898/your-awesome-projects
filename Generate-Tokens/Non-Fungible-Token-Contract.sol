// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract myNFT is ERC721 {

    constructor (string memory nName, string memory nSymbol) ERC721(nName, nSymbol)
    {
        _mint(msg.sender,1);
    }
}
