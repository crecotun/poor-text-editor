export type FormattingType = {
  type: 'bold' | 'italic'
  start: number
  end: number
}

export type SectionIdType = string

export type SectionType = {
  id: SectionIdType
  text: string
  formatting?: FormattingType[]
}

export type CaretCoordinatesType = {
  top: number
  left: number
}

export type CaretStyleType = {
  height: number
}

export type CaretType = {
  id: string
  name: string
  sectionId: string | null
  positionOffset: number | null
  isVisible: boolean
  coordinates: CaretCoordinatesType
  style: CaretStyleType
}

export type TextPositionType = {
  from: number
  to?: number
}
