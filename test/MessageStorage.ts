import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("MessageStorage", function () {
  let messageStorage: any;
  let owner: SignerWithAddress;
  let otherAccount: SignerWithAddress;

  beforeEach(async function () {
    [owner, otherAccount] = await ethers.getSigners();

    const MessageStorageFactory = await ethers.getContractFactory(
      "MessageStorage"
    );
    messageStorage = await MessageStorageFactory.connect(owner).deploy();
    await messageStorage.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await messageStorage.owner()).to.equal(owner.address);
    });
  });

  describe("Setting and Getting Message", function () {
    it("Should allow the owner to set and get the message", async function () {
      const testMessage = "Hello, Blockchain!";
      await messageStorage.setMessage(testMessage);
      expect(await messageStorage.getMessage()).to.equal(testMessage);
    });

    it("Should prevent non-owners from setting the message", async function () {
      const testMessage = "This should not be set";
      await expect(
        messageStorage.connect(otherAccount).setMessage(testMessage)
      ).to.be.revertedWith("Only the owner can call this function");
    });

    it("Should prevent non-owners from getting the message", async function () {
      await expect(
        messageStorage.connect(otherAccount).getMessage()
      ).to.be.revertedWith("Only the owner can call this function");
    });
  });
});
