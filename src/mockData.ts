import { SectionType } from './types'

export const sectionWith1BoldStyling: SectionType = {
  id: '1',
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

export const sectionWithoutStyling: SectionType = {
  id: '2',
  text:
    'Bilbo was very rich and very peculiar, and had been the wonder of the Shire for sixty years, ever since his remarkable disappearance and unexpected return. ',

  formatting: [],
}

export const sectionWith2BoldStyling: SectionType = {
  id: '3',
  text:
    'The riches he had brought back from his travels had now become a local legend, and it was popularly believed, whatever the old folk might say, that the Hill at Bag End was full of tunnels stuffed with treasure.',

  formatting: [
    {
      type: 'bold',
      start: 10,
      end: 14,
    },
    {
      type: 'bold',
      start: 30,
      end: 50,
    },
  ],
}

export const sectionWithBoldAndItalicStyling: SectionType = {
  id: '4',
  text:
    'The riches he had brought back from his travels had now become a local legend, and it was popularly believed, whatever the old folk might say, that the Hill at Bag End was full of tunnels stuffed with treasure.',

  formatting: [
    {
      type: 'bold',
      start: 10,
      end: 14,
    },
    {
      type: 'bold',
      start: 30,
      end: 50,
    },
    {
      type: 'italic',
      start: 30,
      end: 50,
    },
    {
      type: 'italic',
      start: 80,
      end: 100,
    },
  ],
}
