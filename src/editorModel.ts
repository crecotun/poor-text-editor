import { SectionType, SectionIdType } from './types'
import { SectionModel } from './sectionModel'

class EditorModel {
  private sections: SectionModel[] = []

  constructor() {}

  addSection({ id, text, formatting }: SectionType) {
    this.sections.push(new SectionModel({ id, text, formatting }))
  }

  getSectionById(id: SectionIdType): SectionModel | undefined {
    return this.sections.find((section) => section.id === id)
  }
}

export { EditorModel }
