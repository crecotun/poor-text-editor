import { SectionType, SectionIdType } from './types'
import { Section } from './section'

class EditorCore {
  private sections: Section[] = []

  constructor() {}

  addSection({ id, text, formatting }: SectionType) {
    this.sections.push(new Section({ id, text, formatting }))
  }

  getSectionById(id: SectionIdType): Section | undefined {
    return this.sections.find((section) => section.id === id)
  }
}

export { EditorCore }
