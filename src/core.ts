import { SectionType, SectionIdType } from './types'

class EditorCore {
  private sections: SectionType[] = []

  constructor() {
    this.sections = [
      {
        id: 1,
        text:
          'When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton.',

        formatting: [
          {
            type: 'bold',
            start: 0,
            end: 4,
          },
        ],
      },
    ]
  }

  getSectionById(id: SectionIdType): SectionType | undefined {
    return this.sections.find((section) => section.id === id)
  }
}

export { EditorCore }
