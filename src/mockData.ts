import { SectionType } from './types'

export const sectionWith1BoldStyling: SectionType = {
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
}
