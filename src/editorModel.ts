import { SectionType, SectionIdType } from './types'
import { SectionModel } from './sectionModel'

class EditorModel {
  private sections: SectionModel[] = []

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
}

export { EditorModel }
