import { ethers } from "hardhat";
import { Signer } from "ethers";

async function deployContract() {

//     // Token Contract
    const DegenToken = await ethers.getContractAt("DegenToken", "0x158030fd081e1A5C85Bd09B0b8E2Bf354895B222");
    // const degen_token = await DegenToken.deploy("Degen Token", "DGN");
    // await degen_token.deployed();
    //     console.log("DGN Contract Address:", degen_token.address);
    // //  DegenToken Address: 0x158030fd081e1A5C85Bd09B0b8E2Bf354895B222
    
    // MerkleAirdrop Contract
    const MerkleAirdrop = await ethers.getContractAt("MerkleAirdrop", "0xce3E9c1150C535534430a41f5ff189bf1b9505e3");
    // const merkle_airdrop = await MerkleAirdrop.deploy();
    // await merkle_airdrop.deployed();
    
    
    console.log("MerkleAidrop Contract Address:", MerkleAirdrop.address);
    // MerkleAirdrop Address: 0xce3E9c1150C535534430a41f5ff189bf1b9505e3
    console.log();
    
    
    const [signer] = await ethers.getSigners();
    
    const airdropContractBalance = await DegenToken.balanceOf(MerkleAirdrop.address);
    console.log(`MerkleAirdrop contract balance before claim is: ${airdropContractBalance}`)
    
    const claim = await MerkleAirdrop.connect(signer).claim(["0xd3ac4c20e73788796a9331931e65badfccbc73e5ba50d38de13109ec79cea9d6"], 0, 5500)
    console.log(`MerkleAirdrop contract balance after claim is: ${airdropContractBalance}`)
}

deployContract().catch((error) => {
      console.error(error);
      process.exit(1);
    });