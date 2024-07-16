import Pusher from 'pusher-js'
import PUSHER_CONSTANTS from '../../constants/pusher'

class PusherManager {
  private pusher: Pusher

  constructor() {
    this.pusher = this.init()
  }

  init() {
    const pusher = new Pusher(PUSHER_CONSTANTS.KEY, {
      cluster: PUSHER_CONSTANTS.CLUSTER,
      // forceTLS: false,
      // enableStats: false,
      // enabledTransports: ['ws'],
      // disabledTransports: ['wss'],
    })

    Pusher.logToConsole = true

    console.log(pusher)

    return pusher
  }

  connect() {
    return this.pusher.connect()
  }

  disconnect() {
    return this.pusher.disconnect()
  }

  subscribe(channelName: string) {
    return this.pusher.subscribe(channelName)
  }

  getPusher() {
    return this.pusher
  }
}

export const pusherManager = new PusherManager()
