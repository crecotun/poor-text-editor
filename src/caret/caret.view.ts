import { CaretModel } from './caret.model'
import { EventBus } from 'src/eventBus'
import { SectionView } from 'src/sectionView'
import { getElementIndexInParent } from 'src/utils'

class CaretView {
  $el: HTMLElement
  private model: CaretModel
  constructor(model: CaretModel) {
    this.model = model
    this.$el = this.createEl()
    this.render()
    this.initEventsListeners()
  }

  initEventsListeners() {
    this.model.emitter.on('change', this.render)
    EventBus.on('keyboard:char', () => {})

    EventBus.on('caret:move', this.moveCaretToEl)
  }

  createEl() {
    const $el = document.createElement('span')
    $el.classList.add('caret')
    $el.classList.add(this.model.id)

    this.$el = $el

    return this.$el
  }

  moveCaretToEl = ({
    caretId,
    section,
    positionOffset,
  }: {
    caretId: string
    section: SectionView
    positionOffset: number
  }) => {
    if (this.model.id !== caretId) {
      return
    }

    const charEl = getElementIndexInParent(section.$el, positionOffset)
    this.model.setCoordinates(charEl.offsetTop, charEl.offsetLeft)
    this.model.setHeight(charEl.offsetHeight)
    this.model.setPositionOffset(positionOffset)
  }

  render = () => {
    this.$el.style.height = `${this.model.style.height}px`
    this.$el.style.top = `${this.model.coordinates.top}px`
    this.$el.style.left = `${this.model.coordinates.left}px`

    return this.$el
  }
}

export { CaretView }
