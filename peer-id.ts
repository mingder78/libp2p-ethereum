import { privateKeyFromProtobuf, privateKeyToProtobuf } from '@libp2p/crypto/keys'
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string'
import { toString as uint8ArrayToString } from 'uint8arrays/to-string'
import { readFileSync, writeFileSync } from "fs";

export async function loadKeypair(file = "keypair.json") {
  const json = JSON.parse(readFileSync(file, "utf8"));

  const priv = Uint8Array.from(Buffer.from(json.privateKey, "hex"));

  // Reconstruct real libp2p private key object
  const kp = await unmarshalSecp256k1PrivateKey(priv);

  return kp;
}

export function saveKeypair(kp, file = "keypair.json") {


// 🔐 marshal private key into libp2p binary format
const privBytes = marshalSecp256k1PrivateKey(kp);

  writeFileSync(file, privBytes);
  console.log("Saved keypair to", file);
}

/**
 * Decode's a privateKey string representation into a PrivateKey object
 * for use by js-libp2p.
 *
 * The string representation is a base64pad encoded protobuf representation of
 * the private key. This aligns with the way Kubo stores private keys in
 * `~/home/.ipfs/config`.
 */
export function decodePrivateKey (privkeyStr)  {
  const privkeyBytes = uint8ArrayFromString(privkeyStr, 'base64pad')
  return privateKeyFromProtobuf(privkeyBytes)
}

/**
 * Inverse of `decodePrivateKey`. Encodes a PrivateKey object into a string
 */
export function encodePrivateKey (privkey) {
  const privKeyBytes = privateKeyToProtobuf(privkey)
  return uint8ArrayToString(privKeyBytes, 'base64pad')
}
