import { SectionModel } from '../sectionModel'
import { sectionWith1BoldStyling } from '../mockData'
import { SectionView } from '../sectionView'

describe('Section View', () => {
  test('render text', () => {
    const model = new SectionModel(sectionWith1BoldStyling)
    const view = new SectionView(model)

    expect(view.render()).toMatchSnapshot()
  })
})
