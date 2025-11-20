import { privateKeyFromProtobuf, generateKeyPair, privateKeyToProtobuf } from '@libp2p/crypto/keys'
import { bytesToHex } from 'viem';
import { createLibp2p } from './createLibp2p';
import { webSockets } from '@libp2p/websockets';
import { decodePrivateKey, encodePrivateKey } from './peer-id.ts'
import type { PublicKey, PrivateKey } from '@libp2p/interface-keys'
import type { RSAPeerId, Ed25519PeerId, Secp256k1PeerId, PeerId } from '@libp2p/interface-peer-id'
import { writeFileSync } from "fs";

async function main () {
const kp = await generateKeyPair('secp256k1')
console.log('👉 secp256k1 key pair is ', kp)

  const rawPriv = kp.raw;   // Uint8Array(32)
  const ethPrivHex = '0x' + Buffer.from(rawPriv).toString('hex');
  console.log('👉 Ethereum private key:', ethPrivHex);

  const privateKey = encodePrivateKey(kp)
  console.log('👉 private key is ', privateKey)

// Create libp2p PeerId
const node = await createLibp2p(
 {
   privateKey: kp,
 }
)

console.log('✅ PeerId:', node.peerId.toString())
console.log('✅ Multiaddrs: ', node.getMultiaddrs())

}

main().catch(err => {
  console.error(err)
  process.exit(1)
})

// 32-byte raw ECDSA private key (your Ethereum key)
const ethPrivateKeyHex = '0xe28f5bdd32845e8ce260497a180bba342606a6d4e2295dbfe013e7327812afbb';
const privKeyBytes = new Uint8Array(Buffer.from(ethPrivateKeyHex.slice(2), 'hex'));

