const hre = require("hardhat");

async function main() {
  const questions = [
    "Is a public blockchain accessible to anyone with an internet connection?",
    "Can data on a public blockchain be easily altered or deleted once recorded?",
    "Does a public blockchain typically require users to trust a central authority?",
    "Are transactions on a public blockchain usually visible to all participants?",
    "Can anyone participate in the consensus process of a public blockchain like Bitcoin?"
  ];

  const answers = [true, false, false, true, true];

  const MyQuiz = await hre.ethers.getContractFactory("MyQuiz");
  const myQuiz = await MyQuiz.deploy(questions, answers);

  await myQuiz.deployed();

  console.log("MyQuiz deployed to:", myQuiz.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
