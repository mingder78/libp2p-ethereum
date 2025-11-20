import { createLibp2p } from './createLibp2p.ts'

const libp2p = await createLibp2p()
console.log(libp2p.peerId.toString())

