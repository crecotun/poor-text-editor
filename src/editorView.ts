import { EditorModel } from './editorModel'
import {
  sectionWith2BoldStyling,
  sectionWith1BoldStyling,
  sectionWithoutStyling,
} from './mockData'
import { SectionView } from './sectionView'
import { SectionModel } from './sectionModel'
import { getCaretCharacterOffset, getElementIndex } from './utils'
import { CaretView } from 'src/caret/caret.view'
import { KeyboardManager } from './keyboardManager'
import { EventBus } from './eventBus'

// This view does a lot of controller work, better to extract all managment things out of here
class EditorView {
  $editor: HTMLElement
  $caret: HTMLElement | undefined
  model: EditorModel
  sectionViews: SectionView[]
  keyboardManager: KeyboardManager

  constructor($editor: HTMLElement) {
    this.$editor = $editor
    this.model = new EditorModel()
    this.sectionViews = []
    this.keyboardManager = new KeyboardManager()

    this.model.addSections([
      sectionWithoutStyling,
      sectionWith1BoldStyling,
      sectionWith2BoldStyling,
    ])

    this.initCarets()
    this.addSectionViews(this.model.getSections())

    this.render()
    this.initEventListeners()
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

  getSectionViewById = (sectionId: string): SectionView | null => {
    const sectionView = this.sectionViews.find(
      (sectionView) => sectionView.id === sectionId,
    )
    if (!sectionView) {
      return null
    }

    return sectionView
  }

  addSectionViews = (sections: SectionModel[]): SectionView[] => {
    sections.forEach(this.addSectionView)

    return this.sectionViews
  }

  initEventListeners() {
    this.$editor.addEventListener('mousedown', (e: any) => {
      this.model.setFocus(true)
      this.setCaretData(e)
    })

    // Not the best place to listen this events in this view
    EventBus.on('keyboard:char', (char: string) => {
      const currentCaret = this.model.getCaretById('current')

      if (!currentCaret) {
        return
      }

      EventBus.emit('insertText', {
        text: char,
        sectionId: currentCaret.sectionId,
        position: { from: currentCaret.positionOffset },
      })

      EventBus.emit('caret:move', {
        caretId: 'current',
        positionOffset: currentCaret.positionOffset + 1,
        section: this.getSectionViewById(currentCaret.sectionId),
      })
    })

    EventBus.on('keyboard:backspace', () => {
      const currentCaret = this.model.getCaretById('current')
      if (!currentCaret) {
        return
      }

      EventBus.emit('deleteText', {
        sectionId: currentCaret.sectionId,
        position: {
          from: currentCaret.positionOffset - 1,
          to: currentCaret.positionOffset,
        },
      })

      EventBus.emit('caret:move', {
        caretId: 'current',
        positionOffset: currentCaret.positionOffset - 1,
        section: this.getSectionViewById(currentCaret.sectionId),
      })
    })

    EventBus.on('keyboard:arrow-left', () => {
      const currentCaret = this.model.getCaretById('current')
      if (!currentCaret) {
        return
      }

      EventBus.emit('caret:move', {
        caretId: 'current',
        positionOffset: currentCaret.positionOffset - 1,
        section: this.getSectionViewById(currentCaret.sectionId),
      })
    })

    EventBus.on('keyboard:arrow-right', () => {
      const currentCaret = this.model.getCaretById('current')
      if (!currentCaret) {
        return
      }

      EventBus.emit('caret:move', {
        caretId: 'current',
        positionOffset: currentCaret.positionOffset + 1,
        section: this.getSectionViewById(currentCaret.sectionId),
      })
    })
  }

  setCaretData = (e: any) => {
    const target: HTMLElement = e.target
    const parentNode = target.parentElement as HTMLElement
    const caretOffset = getElementIndex(target) // will need to insert chars

    if (!target.dataset['type']) {
      return
    }

    const currentCaret = this.model.getCaretById('current')

    if (currentCaret) {
      currentCaret.setSectionId(parentNode.dataset['sectionId'] || '')
      currentCaret.setPositionOffset(caretOffset)
      currentCaret.setCoordinates(target.offsetTop, target.offsetLeft)
      currentCaret.setHeight(target.offsetHeight)
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
