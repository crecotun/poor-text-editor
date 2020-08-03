import { SectionModel } from '../sectionModel'
import { sectionWith1BoldStyling } from '../mockData'

describe('sectionModel', () => {
  test('create', () => {
    const sectionModel = new SectionModel(sectionWith1BoldStyling).toString()

    expect(sectionModel).toEqual(sectionWith1BoldStyling)
  })

  test('insert 1 symbol after styling', () => {
    const sectionModel = new SectionModel(sectionWith1BoldStyling)
    sectionModel.insertText('1', { from: 195 })

    const expected =
      'When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton.1'

    expect(sectionModel.text).toBe(expected)
  })

  test('insert several words after styling', () => {
    const sectionModel = new SectionModel(sectionWith1BoldStyling)
    sectionModel.insertText('longer text ', { from: 114 })

    const expected =
      'When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with longer text a party of special magnificence, there was much talk and excitement in Hobbiton.'

    expect(sectionModel.text).toBe(expected)
  })
})
