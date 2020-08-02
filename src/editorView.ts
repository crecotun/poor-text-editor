import { EditorModel } from './editorModel'
import {
  sectionWith2BoldStyling,
  sectionWith1BoldStyling,
  sectionWithoutStyling,
} from './mockData'
import { SectionView } from './sectionView'
import { SectionModel } from './sectionModel'

class EditorView {
  $editor: Element
  model: EditorModel
  sectionViews: SectionView[]

  constructor($editor: Element) {
    this.$editor = $editor
    this.model = new EditorModel()
    this.sectionViews = []

    this.model.addSections([
      sectionWithoutStyling,
      sectionWith1BoldStyling,
      sectionWith2BoldStyling,
    ])

    this.addSectionViews(this.model.getSections())

    this.render()
  }

  addSectionView = (sectionModel: SectionModel): SectionView => {
    const sectionView = new SectionView(sectionModel)
    this.sectionViews.push(sectionView)
    return sectionView
  }

  addSectionViews = (sections: SectionModel[]): SectionView[] => {
    sections.forEach(this.addSectionView)

    return this.sectionViews
  }

  render() {
    this.$editor.innerHTML = ''

    this.sectionViews.forEach((sectionView) =>
      this.$editor.append(sectionView.render()),
    )
  }
}

export { EditorView }
