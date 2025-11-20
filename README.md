# libp2p peer binds to a ethereum address

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
// or
bun dev
```

This project was created using `bun init` in bun v1.1.20. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## demo

```sh
$ bun dev

$ bun run --hot index.ts
👉 secp256k1 key pair is  Secp256k1PrivateKey {
  type: "secp256k1",
  raw: Uint8Array(32) [ 219, 130, 231, 64, 143, 190, 55, 224, 100, 16, 135, 85, 127, 53, 53, 163, 64, 73, 209, 157, 39, 246, 147, 159, 67, 180, 116, 24, 205, 152, 20, 52 ],
  publicKey: Secp256k1PublicKey {
    type: "secp256k1",
    raw: Uint8Array(33) [ 3, 20, 61, 49, 254, 106, 5, 22, 163, 76, 90, 91, 30, 6, 41, 173, 62, 130, 235, 124, 118, 198, 27, 189, 205, 113, 3, 18, 39, 213, 138, 5, 178 ],
    _key: Uint8Array(33) [ 3, 20, 61, 49, 254, 106, 5, 22, 163, 76, 90, 91, 30, 6, 41, 173, 62, 130, 235, 124, 118, 198, 27, 189, 205, 113, 3, 18, 39, 213, 138, 5, 178 ],
    toMultihash: [Function: toMultihash],
    toCID: [Function: toCID],
    toString: [Function: toString],
    equals: [Function: equals],
    verify: [Function: verify],
  },
  equals: [Function: equals],
  sign: [Function: sign],
}
👉 Ethereum private key: 0xdb82e7408fbe37e0641087557f3535a34049d19d27f6939f43b47418cd981434
✅ PeerId: 16Uiu2HAmE1zdG92om3Y49m3ZeT5T3jAZCZ1w7JGWi93NWGRbjmW1
✅ Multiaddrs:  []
```
