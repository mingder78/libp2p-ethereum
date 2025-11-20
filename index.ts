import { privateKeyFromRaw, generateKeyPair } from "@libp2p/crypto/keys";
import { createLibp2p } from "./createLibp2p";
import { writeFile, readFile } from "fs/promises";
const FILE = "./secp256k1-privateKey.raw";

async function main() {
  const kp = await generateKeyPair("secp256k1");
  console.log("👉 secp256k1 key pair is ", kp);

  const raw = kp.raw;
  const ethPrivHex = "0x" + Buffer.from(raw).toString("hex");
  console.log("👉 Ethereum private key:", ethPrivHex);
  await writeFile(FILE, Buffer.from(raw).toString('hex')); // remark this line if you want to use same peer id

  const hex = await readFile(FILE, "utf8");
  const raw2 = Uint8Array.from(Buffer.from(hex, "hex"));
  const restored = privateKeyFromRaw(raw2, "secp256k1");

  // Create libp2p PeerId
  const node = await createLibp2p({
    privateKey: restored,
  });

  console.log("✅ PeerId:", node.peerId.toString());
  console.log("✅ Multiaddrs: ", node.getMultiaddrs());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

// 32-byte raw ECDSA private key (your Ethereum key)
const ethPrivateKeyHex =
  "0xe28f5bdd32845e8ce260497a180bba342606a6d4e2295dbfe013e7327812afbb";
const privKeyBytes = new Uint8Array(
  Buffer.from(ethPrivateKeyHex.slice(2), "hex")
);
