// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// A simple contract to store and retrieve a string message.
contract MessageStorage {
    string private storedMessage;

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Modifier to restrict access to the owner only.
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function setMessage(string calldata _message) public onlyOwner {
        storedMessage = _message;
    }

    function getMessage() public view onlyOwner returns (string memory) {
        return storedMessage;
    }
} 