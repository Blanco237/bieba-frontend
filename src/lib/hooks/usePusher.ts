import Pusher, { Channel } from 'pusher-js'
import { useEffect, useRef } from 'react'
import { pusherManager } from '../pusher'

type UsePusherProps = {
  channel: string
  event: string
  listener: (data: unknown, metadata: unknown) => void
}

const usePusher = ({ channel, event, listener }: UsePusherProps) => {
  const pusherRef = useRef<Pusher | null>(null)
  const pusherChannelRef = useRef<Channel | null>(null)


  useEffect(() => {
    const pusher: Pusher = pusherManager.getPusher()

    pusher.connection.bind('state_change', function (states: { current: string }) {
      if (states.current === 'connected') {
        console.log(`=> Pusher ${channel} ==> Connected `)
      }
    })

    let pusherChannel: Channel
    pusherManager.connect()

    pusherChannel = pusherManager.subscribe(channel)

    pusherChannel.bind(event, listener)
    pusherChannelRef.current = pusherChannel



    // Store the pusher and pusherChannel instances in refs
    pusherRef.current = pusher

    // Return a function that does nothing to leave the subscription open
    return () => {
      if (pusherRef.current && pusherChannelRef.current) {
        pusherRef.current.unsubscribe(pusherChannelRef.current.name)
      }
    }
  }, [channel, event])

  // You can expose a function to manually unsubscribe from the channel
  const unsubscribe = () => {
    if (pusherRef.current && pusherChannelRef.current) {
      pusherRef.current.unsubscribe(pusherChannelRef.current.name)
    }
  }

  return { unsubscribe }
}

export default usePusher
