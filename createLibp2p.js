import { noise } from '@chainsafe/libp2p-noise'
import { yamux } from '@chainsafe/libp2p-yamux'
import { floodsub } from '@libp2p/floodsub'
import { identify, identifyPush } from '@libp2p/identify'
import { tcp } from '@libp2p/tcp'
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string'
import { toString as uint8ArrayToString } from 'uint8arrays/to-string'
import defaultsDeep from "@nodeutils/defaults-deep";
import { createLibp2p as create } from "libp2p";
import { logger } from '@libp2p/logger'

const log = logger('🙋')

export async function createLibp2p(_options = {}) {
  const defaults = {
    addresses: {
      listen: ['/ip4/0.0.0.0/tcp/0']
    },
    transports: [tcp()],
    streamMuxers: [yamux()],
    connectionEncrypters: [noise()],
    services: {
      pubsub: floodsub(),
      identify: identify(),
      identifyPush: identifyPush()
    }
  };
  const node = await create(defaultsDeep(_options, defaults));

//  node.services.pubsub.subscribe(topic) // should do after create
  node.services.pubsub.addEventListener('message', (evt) => {
    log(`${evt.detail.from.toString().slice(0,4)}...${evt.detail.from.toString().slice(-4)} sent: ${uint8ArrayToString(evt.detail.data)} on topic: ${evt.detail.topic}`)
  })
  return node
}
