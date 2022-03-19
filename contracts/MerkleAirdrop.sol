// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MerkleAirdrop{

    bytes32 public merkleRoot = 0x8cbdb929e5a209dee20de7413dd68531f7cba5200240e34d9d42b881faae6b79;

    IERC20 private degenToken = IERC20(0x0feF87dD6E09A83f6F2AbC215115a783fF32DA20);
    mapping(address => bool) claimed;
    event claimedDrop(address, uint);

    function claim(bytes32[] calldata _merkleProof, uint _itemId, uint _amount) public returns (bool success){
        require(claimed[msg.sender] == false, "Alaye you don colet dis tin na!");
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender, _itemId, _amount));
        require(MerkleProof.verify(_merkleProof, merkleRoot, leaf), "Your proof no coret, no dey wine me");

        require(degenToken.transfer(msg.sender, _amount), "Transfer failed");
        claimed[msg.sender] = true;

        emit claimedDrop(msg.sender, _amount);
        success = true;
    }

    
}