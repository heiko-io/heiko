import { createLibp2p } from 'libp2p'
import { TCP } from '@libp2p/tcp'
import { Noise } from '@chainsafe/libp2p-noise'
import { Mplex } from '@libp2p/mplex'

const main = async () => {
  const node = await createLibp2p({
    addresses: {
      // add a listen address (localhost) to accept TCP connections on a random port
      listen: ['/ip4/127.0.0.1/tcp/0']
    },
    transports: [new TCP()],
    connectionEncryption: [new Noise()],
    streamMuxers: [new Mplex()]
  })

  // start libp2p
  await node.start()
  console.log('libp2p has started')

  // print out listening addresses
  console.log('listening on addresses:')
  node.getMultiaddrs().forEach((addr) => {
    console.log(addr.toString())
  })

  // stop libp2p
  await node.stop()
  console.log('libp2p has stopped')
}

main().then().catch(console.error)
