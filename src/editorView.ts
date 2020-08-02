import { EditorModel } from './editorModel'
import { sectionWith1BoldStyling } from './mockData'

class EditorView {
  $editor: Element
  model: EditorModel

  constructor($editor: Element) {
    this.$editor = $editor
    this.model = new EditorModel()

    this.model.addSection(sectionWith1BoldStyling)

    this.render()
  }

  render() {
    const section = this.model.getSectionById(1)
    if (!section) {
      return
    }

    this.$editor.innerHTML = section.text
  }
}

export { EditorView }
