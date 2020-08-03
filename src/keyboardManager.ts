import {
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  ARROW_DOWN_KEY,
  ENTER_KEY,
  BACKSPACE_KEY,
  DELETE_KEY,
} from './constants'
import { isCharKey } from './utils'
import { EventBus } from './eventBus'

class KeyboardManager {
  constructor() {
    this.initEventListeners()
  }

  initEventListeners() {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (isCharKey(e.key)) {
        EventBus.emit('keyboard:char', e.key)
        return
      }

      switch (e.keyCode) {
        case ARROW_LEFT_KEY:
          EventBus.emit('keyboard:arrow-left')
          break
        case ARROW_RIGHT_KEY:
          EventBus.emit('keyboard:arrow-right')
          break
        case ARROW_UP_KEY:
          console.log('arrow up')
          break
        case ARROW_DOWN_KEY:
          console.log('arrow down')
          break
        case BACKSPACE_KEY:
          EventBus.emit('keyboard:backspace')
          break
        case DELETE_KEY:
          EventBus.emit('keyboard:delete')
          break
        case ENTER_KEY:
          // trigger event to create a new section or split current section into 2
          console.log('enter')
          break

        default:
          console.log('unknown')
          break
      }
    })
  }
}

export { KeyboardManager }
