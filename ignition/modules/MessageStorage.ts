import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MessageStorageModule = buildModule("MessageStorageModule", (m) => {
  const messageStorage = m.contract("MessageStorage");

  return { messageStorage };
});

export default MessageStorageModule;
