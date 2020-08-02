import { SectionModel } from '../sectionModel'
import { sectionWith1BoldStyling } from '../mockData'

describe('sectionModel', () => {
  test('create', () => {
    const sectionModel = new SectionModel(sectionWith1BoldStyling).toString()

    expect(sectionModel).toEqual(sectionWith1BoldStyling)
  })
})
