import { SectionModel } from '../sectionModel'

describe('sectionModel', () => {
  test('create', () => {
    const sectionData = {
      id: 1,
      text: 'Hi there',
      formatting: [],
    }

    const sectionModel = new SectionModel(sectionData).toString()

    expect(sectionModel).toEqual(sectionData)
  })

  // test('insert')
})
