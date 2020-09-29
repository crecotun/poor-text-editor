import { SectionType, SectionIdType } from './types'
import { SectionModel } from './sectionModel'
import { CaretModel } from 'src/caret/caret.model'

class EditorModel {
  private sections: SectionModel[] = []
  private carets: CaretModel[] = []
  isFocused: boolean = false

  constructor() {}

  addSections = (sections: SectionType[]): void => {
    sections.forEach(this.addSection)
  }

  addSection = ({ id, text, formatting }: SectionType): void => {
    this.sections.push(new SectionModel({ id, text, formatting }))
  }

  getSectionById = (id: SectionIdType): SectionModel | undefined => {
    return this.sections.find((section) => section.id === id)
  }

  getSections = (): SectionModel[] => {
    return this.sections
  }

  addCaret = (id: string, name: string): CaretModel => {
    const caret = new CaretModel('current', 'me')
    this.carets.push(caret)

    return caret
  }

  getCarets = (): CaretModel[] => {
    return this.carets
  }

  getCaretById = (id: string): CaretModel | undefined => {
    return this.carets.find((caret) => caret.id === id)
  }

  setFocus(isFocused: boolean) {
    this.isFocused = isFocused
  }
}

export { EditorModel }
