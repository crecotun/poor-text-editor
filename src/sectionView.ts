import { SectionModel } from './sectionModel'

class SectionView {
  private model: SectionModel
  private $el: Element

  constructor(model: SectionModel) {
    this.model = model
    this.$el = document.createElement('div')
  }

  render() {
    this.$el.innerHTML = this.model.text

    return this.$el
  }
}

export { SectionView }
