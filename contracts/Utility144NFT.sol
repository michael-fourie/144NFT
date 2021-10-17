pragma solidity ^0.8.0;

import "./ONEFOURFOURNFT.sol";
import "../client/node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract Utility144NFT is Ownable{

    ONEFOURFOURNFT public onefourfour;

    mapping(uint => string) public gridToURI;    
    event BuyGrid(address sender);
    event WithdrawFunds(address owner, uint balance);

    address _owner;

    constructor(ONEFOURFOURNFT _onefourfour){
        onefourfour = _onefourfour;
        _owner = msg.sender;
    }

    function buyGrid(address _sender, string memory _ipfsHash, uint _gridId) public payable returns (bool) {
        require(msg.value == 60000000000000000);
        bool r = onefourfour.mint144NFT(_sender, _ipfsHash, _gridId);
        if (r) {
            gridToURI[_gridId] = _ipfsHash; 
         }
        emit BuyGrid(_sender);
        return r;
    }

    function getUri(uint _gridId) public view returns (string memory){
        return gridToURI[_gridId];
    }

    function withdrawFunds() public returns(bool){
        require(msg.sender == _owner);
        uint balance = address(this).balance;
        require(balance > 0, "Balance of contract must be greater than 0");
        payable(_owner).transfer(balance);
        emit WithdrawFunds(msg.sender, balance);
        return true;
    }

    function getBalance() public view returns (uint){
        return address(this).balance;
    }
}
