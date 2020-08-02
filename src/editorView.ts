import { EditorModel } from './editorModel'
import { sectionWith1BoldStyling } from './mockData'
import { SectionView } from './sectionView'

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

    this.$editor.innerHTML = ''
    const sectionView = new SectionView(section)
    this.$editor.append(sectionView.render())
  }
}

export { EditorView }
