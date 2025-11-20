import { privateKeyFromRaw, generateKeyPair } from "@libp2p/crypto/keys";
import { createLibp2p } from "./createLibp2p.js";
import { writeFile, readFile } from "fs/promises";
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string'
import { toString as uint8ArrayToString } from 'uint8arrays/to-string'

const FILE = "./secp256k1-privateKey.raw";
const topic = 'news';

async function main() {
  const kp = await generateKeyPair("secp256k1");
  //console.log("👉 secp256k1 key pair is ", kp);

  const raw = kp.raw;
//  await writeFile(FILE, Buffer.from(raw).toString('hex')); // remark this line if you want to use same peer id

  const hex = await readFile(FILE, "utf8");
  const raw2 = Uint8Array.from(Buffer.from(hex, "hex"));

  const ethPrivHex = "0x" + Buffer.from(raw2).toString("hex");
  console.log("👉 Ethereum private key:", ethPrivHex);

  const restored = privateKeyFromRaw(raw2, "secp256k1");

  // Create libp2p PeerId
  const node = await createLibp2p({
    privateKey: restored,
  });

  console.log("✅ PeerId:", node.peerId.toString());
  console.log("✅ Multiaddrs: ", node.getMultiaddrs());

  const node2kp = await generateKeyPair("secp256k1");

  const node2 = await createLibp2p({
    privateKey: node2kp,
  });

  console.log("✅ node2 PeerId:", node2.peerId.toString());
  console.log("✅ node2 Multiaddrs: ", node2.getMultiaddrs());

  // Connect the two nodes
  await node.dial(node2.getMultiaddrs())

  // subscribe
  node.services.pubsub.subscribe(topic)
  node2.services.pubsub.subscribe(topic)

 node.services.pubsub.addEventListener('message', (evt) => {
    console.log(`node1 received: ${uint8ArrayToString(evt.detail.data)} on topic: ${evt.detail.topic}`)
  })

  // node2 publishes "news" every second

setInterval(() => {
  node2.services.pubsub.publish(topic, uint8ArrayFromString('Bird bird bird, bird is the word!')).catch(err => {
    console.error(err)
  })
}, 1000)
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
