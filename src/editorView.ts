import { EditorModel } from './editorModel'
import {
  sectionWith2BoldStyling,
  sectionWith1BoldStyling,
  sectionWithoutStyling,
} from './mockData'
import { SectionView } from './sectionView'
import { SectionModel } from './sectionModel'
import { getCaretCharacterOffset } from './utils'
import { CaretView } from './caretView'

class EditorView {
  $editor: HTMLElement
  model: EditorModel
  sectionViews: SectionView[]
  $caret: HTMLElement | undefined

  constructor($editor: HTMLElement) {
    this.$editor = $editor
    this.model = new EditorModel()
    this.sectionViews = []

    this.model.addSections([
      sectionWithoutStyling,
      sectionWith1BoldStyling,
      sectionWith2BoldStyling,
    ])

    this.initCarets()
    this.addSectionViews(this.model.getSections())

    this.render()
    this.addEvents()
  }

  initCarets() {
    const caret = this.model.addCaret('current', 'me')
    this.$caret = new CaretView(caret).$el
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

  addEvents() {
    this.$editor.addEventListener('mousedown', this.setCaretData)
  }

  setCaretData = (e: any) => {
    const target: HTMLElement = e.target
    const parentNode = target.parentElement as HTMLElement
    const caretOffset = getCaretCharacterOffset(parentNode) // will need to insert chars

    if (!target.dataset['type']) {
      return
    }

    const myCaret = this.model.getCaretById('current')

    if (myCaret) {
      myCaret.setPositionOffset(caretOffset.start)
      myCaret.setCoordinates(target.offsetTop, target.offsetLeft)
      myCaret.setHeight(target.offsetHeight)
    }
  }

  render() {
    this.$editor.innerHTML = ''
    if (this.$caret) {
      this.$editor.append(this.$caret)
    }

    this.sectionViews.forEach((sectionView) =>
      this.$editor.append(sectionView.render()),
    )
  }
}

export { EditorView }
