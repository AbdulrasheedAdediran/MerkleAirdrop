// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MerkleAirdrop{

    bytes32 public merkleRoot = 0xf29087b136556cb957b82f3a6564bdc779040126bd83599487fe9dfa2666b718;

    IERC20 private degenToken = IERC20(0x158030fd081e1A5C85Bd09B0b8E2Bf354895B222);
    mapping(address => bool) claimed;
    event claimedDrop(address, uint);

    function claim(bytes32[] calldata _merkleProof, uint _itemId, uint _amount) public returns (bool success){
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender, _itemId, _amount));
        require(MerkleProof.verify(_merkleProof, merkleRoot, leaf), "Your proof no coret, no dey wine me");
        require(claimed[msg.sender] == false, "Alaye you don colet dis tin na!");
        degenToken.transfer(msg.sender, _amount);

        claimed[msg.sender] = true;
        emit claimedDrop(msg.sender, _amount);
        success;
    }

    
}