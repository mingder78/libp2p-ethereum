import { yamux } from "@chainsafe/libp2p-yamux";
import { tcp } from "@libp2p/tcp";
import defaultsDeep from "@nodeutils/defaults-deep";
import { createLibp2p as create } from "libp2p";

export async function createLibp2p(_options = {}) {
  const defaults = {
    transports: [tcp()],
    streamMuxers: [yamux()],
  };
  return create(defaultsDeep(_options, defaults));
}
