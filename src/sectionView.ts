import { SectionModel } from './sectionModel'

class SectionView {
  private model: SectionModel
  private $el: HTMLElement

  constructor(model: SectionModel) {
    this.model = model
    this.$el = document.createElement('div')
  }

  initEventListeners() {
    // listen to model on change and rerender
  }

  render() {
    const elementFragment = document.createDocumentFragment()

    // make every char as seperate element to apply styling easily and detect cursor position
    this.model.text.split('').forEach((char) => {
      const span = document.createElement('span')
      span.textContent = char
      span.setAttribute('data-type', 'char')
      elementFragment.appendChild(span)
    })

    // go through formating options and apply styling to elements
    if (this.model.formatting?.length) {
      this.model.formatting.forEach((format) => {
        for (let i = format.start; i <= format.end; i++) {
          const item = elementFragment.children.item(i)
          item?.classList.toggle(format.type)
        }
      })
    }

    this.$el.setAttribute('data-section-id', `${this.model.id}`)
    this.$el.innerHTML = ''
    this.$el.appendChild(elementFragment)

    return this.$el
  }
}

export { SectionView }
