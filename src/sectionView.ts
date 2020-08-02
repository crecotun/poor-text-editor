import { SectionModel } from './sectionModel'

class SectionView {
  private model: SectionModel
  private $el: Element

  constructor(model: SectionModel) {
    this.model = model
    this.$el = document.createElement('div')
  }

  render() {
    const elementFragment = document.createDocumentFragment()

    // make every char as seperate element to apply styling easily and detect cursor position
    this.model.text.split('').forEach((char) => {
      const span = document.createElement('span')
      span.textContent = char
      elementFragment.appendChild(span)
    })

    this.$el.innerHTML = ''
    this.$el.appendChild(elementFragment)

    return this.$el
  }
}

export { SectionView }
