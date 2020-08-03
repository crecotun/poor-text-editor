import { CaretModel } from './caretModel'

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
  }

  createEl() {
    const $el = document.createElement('span')
    $el.classList.add('caret')
    $el.classList.add(this.model.id)

    this.$el = $el

    return this.$el
  }

  render = () => {
    this.$el.style.height = `${this.model.style.height}px`
    this.$el.style.top = `${this.model.coordinates.top}px`
    this.$el.style.left = `${this.model.coordinates.left}px`

    return this.$el
  }
}

export { CaretView }
