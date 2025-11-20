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
$ DEBUG=libp2p:floodsub,🙋 node index.js
👉 Ethereum private key: 0xdb82e7408fbe37e0641087557f3535a34049d19d27f6939f43b47418cd981434
  libp2p:floodsub starting +0ms
  libp2p:floodsub started +11ms
✅ PeerId: 16Uiu2HAmE1zdG92om3Y49m3ZeT5T3jAZCZ1w7JGWi93NWGRbjmW1
✅ Multiaddrs:  [
  Multiaddr(/ip4/127.0.0.1/tcp/57995/p2p/16Uiu2HAmE1zdG92om3Y49m3ZeT5T3jAZCZ1w7JGWi93NWGRbjmW1),
  Multiaddr(/ip4/192.168.1.113/tcp/57995/p2p/16Uiu2HAmE1zdG92om3Y49m3ZeT5T3jAZCZ1w7JGWi93NWGRbjmW1),
  Multiaddr(/ip4/10.147.20.194/tcp/57995/p2p/16Uiu2HAmE1zdG92om3Y49m3ZeT5T3jAZCZ1w7JGWi93NWGRbjmW1)
]
  libp2p:floodsub starting +0ms
  libp2p:floodsub started +2ms
✅ node2 PeerId: 16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW
✅ node2 Multiaddrs:  [
  Multiaddr(/ip4/127.0.0.1/tcp/57996/p2p/16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW),
  Multiaddr(/ip4/192.168.1.113/tcp/57996/p2p/16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW),
  Multiaddr(/ip4/10.147.20.194/tcp/57996/p2p/16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW)
]
  libp2p:floodsub subscribe to topic: news +184ms
  libp2p:floodsub subscribe to topic: news +129ms
  libp2p:floodsub connected 16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW +79ms
  libp2p:floodsub new peer 16Uiu2HAmE1zdG92om3Y49m3ZeT5T3jAZCZ1w7JGWi93NWGRbjmW1 +96ms
  libp2p:floodsub connected 16Uiu2HAmE1zdG92om3Y49m3ZeT5T3jAZCZ1w7JGWi93NWGRbjmW1 +5ms
  libp2p:floodsub new peer 16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW +28ms
  libp2p:floodsub rpc from 16Uiu2HAmE1zdG92om3Y49m3ZeT5T3jAZCZ1w7JGWi93NWGRbjmW1 +10ms
  libp2p:floodsub subscription update from 16Uiu2HAmE1zdG92om3Y49m3ZeT5T3jAZCZ1w7JGWi93NWGRbjmW1 +0ms
  libp2p:floodsub rpc from 16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW +8ms
  libp2p:floodsub subscription update from 16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW +0ms
  libp2p:floodsub connected 16Uiu2HAmE1zdG92om3Y49m3ZeT5T3jAZCZ1w7JGWi93NWGRbjmW1 +770ms
  libp2p:floodsub outbound pubsub stream already present on connection from 16Uiu2HAmE1zdG92om3Y49m3ZeT5T3jAZCZ1w7JGWi93NWGRbjmW1 +0ms
  libp2p:floodsub connected 16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW +796ms
  libp2p:floodsub outbound pubsub stream already present on connection from 16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW +0ms
  libp2p:floodsub publish topic: news from: 16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW data: QmlyZCBiaXJkIGJpcmQsIGJpcmQgaXMgdGhlIHdvcmQh +122ms
  libp2p:floodsub publish msgs on topics news 16Uiu2HAmE1zdG92om3Y49m3ZeT5T3jAZCZ1w7JGWi93NWGRbjmW1 +5ms
  libp2p:floodsub rpc from 16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW +99ms
  libp2p:floodsub messages from 16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW +0ms
  🙋 16Ui...UZoW sent: Bird bird bird, bird is the word! on topic: news +0ms
node1 received: Bird bird bird, bird is the word! on topic: news
  libp2p:floodsub not sending message on topic news to sender 16Uiu2HAkvb94tve3vdHVkjmK4pdhNeng7KAxxDrSXHWXo27qUZoW +14ms
```
