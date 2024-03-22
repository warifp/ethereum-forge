async function main() {
  const ERC20Token = await ethers.getContractFactory("ERC20Token");
  const token = await ERC20Token.attach("YOUR_CONTRACT_ADDRESS");

  const balance = await token.balanceOf("ADDRESS_TO_CHECK_BALANCE");
  console.log("Balance:", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
