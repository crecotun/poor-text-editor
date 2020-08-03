import { SectionModel } from '../sectionModel'
import {
  sectionWith1BoldStyling,
  sectionWithoutStyling,
  sectionWith2BoldStyling,
  sectionWithBoldAndItalicStyling,
} from '../mockData'
import { SectionView } from '../sectionView'

describe('Section View', () => {
  test('render text witouth styling', () => {
    const model = new SectionModel(sectionWithoutStyling)
    const view = new SectionView(model)

    expect(view.render()).toMatchSnapshot()
  })
  test('render text with just 1 bold tag', () => {
    const model = new SectionModel(sectionWith1BoldStyling)
    const view = new SectionView(model)

    expect(view.render()).toMatchSnapshot()
  })
  test('render text with just 2 bold tags', () => {
    const model = new SectionModel(sectionWith2BoldStyling)
    const view = new SectionView(model)

    expect(view.render()).toMatchSnapshot()
  })
  test('render text with bold and italic', () => {
    const model = new SectionModel(sectionWithBoldAndItalicStyling)
    const view = new SectionView(model)

    expect(view.render()).toMatchSnapshot()
  })
})
