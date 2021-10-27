pragma solidity ^0.8.0;

import "../client/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../client/node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";

contract ONEFOURFOURNFT is ERC721URIStorage {
    
    using SafeMath for uint256;
    string _name = "144NFT";
    string _symbol = "144";

    constructor() ERC721(_name, _symbol) public {}
    
    uint private _cap = 144;
    uint private _count = 0;

    function mint144NFT(address user, string memory tokenURI, uint tokenID) public returns (bool) {
        require(_count < _cap, "All tokens minted");
        require(tokenID >= 0, "Must have valid token ID");
        require(tokenID <= 144, "Must have valid token ID");
        _mint(user, tokenID);
        _setTokenURI(tokenID, tokenURI);
        _count = _count.add(1);
        return true;
    }
}