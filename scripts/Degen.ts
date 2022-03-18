import { ethers } from "hardhat";
// import { Signer } from "ethers";

async function deployContract() {

//     // Token Contract
//     const DegenToken = await ethers.getContractFactory("DegenToken");
//     const degen_token = await DegenToken.deploy("Degen Token", "DGN");
//     await degen_token.deployed();

    // MerkleAirdrop Contract
    const MerkleAirdrop = await ethers.getContractFactory("MerkleAirdrop");
    const merkle_airdrop = await MerkleAirdrop.deploy();
    await merkle_airdrop.deployed();

    // console.log("DGN Contract Address:", degen_token.address);
    // // DegenToken Address: 0x158030fd081e1A5C85Bd09B0b8E2Bf354895B222
    
    console.log("MerkleAidrop Contract Address:", merkle_airdrop.address);
    // DegenToken Address: 0xce3E9c1150C535534430a41f5ff189bf1b9505e3
}

deployContract().catch((error) => {
      console.error(error);
      process.exit(1);
    });