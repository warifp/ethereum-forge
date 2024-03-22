const { expect } = require("chai");

describe("ERC20Token", function () {
  it("Should return correct name, symbol and initial balance", async function () {
    const ERC20Token = await ethers.getContractFactory("ERC20Token");
    const token = await ERC20Token.deploy();
    await token.deployed();

    expect(await token.name()).to.equal("ERC20Token");
    expect(await token.symbol()).to.equal("ERC");
    expect(
      await token.balanceOf(await ethers.provider.getSigner(0).getAddress())
    ).to.equal(1000000);
  });
});
