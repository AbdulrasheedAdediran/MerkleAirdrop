import { ethers } from "hardhat";
// import { Signer } from "ethers";

async function deployContract() {

    // Token Contract
    const DegenToken = await ethers.getContractAt("DegenToken", "0x0feF87dD6E09A83f6F2AbC215115a783fF32DA20");
    // const DegenToken = await ethers.getContractFactory("DegenToken");
    // const degen_token = await DegenToken.deploy("Degen Token", "DGN");
    // await degen_token.deployed();
        console.log("DGN Contract Address:", DegenToken.address);
    //  DegenToken FTM Address: 0x158030fd081e1A5C85Bd09B0b8E2Bf354895B222
    //  DegenToken Rinkeby Address: 0x0feF87dD6E09A83f6F2AbC215115a783fF32DA20
    
    // MerkleAirdrop Contract
    const merkle_airdrop = await ethers.getContractAt("MerkleAirdrop", "0x95Ca8c67F9C1FC4ff679d7B2213500398fe5C8c5");
    // const MerkleAirdrop = await ethers.getContractFactory("MerkleAirdrop");
    // const merkle_airdrop = await MerkleAirdrop.deploy();
    // await merkle_airdrop.deployed();
        console.log("MerkleAidrop Contract Address:", merkle_airdrop.address);
    // MerkleAirdrop FTM Address: 0xce3E9c1150C535534430a41f5ff189bf1b9505e3
    // MerkleAirdrop Rinkeby Address: 0x95Ca8c67F9C1FC4ff679d7B2213500398fe5C8c5 
    
    // const [signer] = await ethers.getSigners();
    
    let airdropContractBalance = await DegenToken.balanceOf(merkle_airdrop.address);
    console.log(`MerkleAirdrop contract balance before claim is: ${airdropContractBalance}`)
    
    const claim = await merkle_airdrop.claim(["0xba0a1f4b9a3d79410dfba560c4a4384201e527484945b6e812686809d7d54dc4"], 0, 55000000);
    // console.log("claim", claim);
    
    airdropContractBalance = await DegenToken.balanceOf(merkle_airdrop.address);
    console.log(`MerkleAirdrop contract balance after claim is: ${airdropContractBalance}`)
}

deployContract().catch((error) => {
      console.error(error);
      process.exit(1);
    });