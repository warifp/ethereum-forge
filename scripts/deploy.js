async function main() {
  const ERC20Token = await ethers.getContractFactory("ERC20Token");
  const token = await ERC20Token.deploy();

  console.log("ERC20Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
