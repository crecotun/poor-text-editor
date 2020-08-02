export type FormattingType = {
  type: 'bold' | 'italic'
  start: number
  end: number
}

export type SectionIdType = string | number

export type SectionType = {
  id: SectionIdType
  text: string
  formatting: FormattingType[]
}
