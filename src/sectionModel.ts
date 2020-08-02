import { SectionIdType, FormattingType, SectionType } from './types'

class SectionModel {
  public readonly id: SectionIdType
  private _text: string
  private _formatting: FormattingType[]

  constructor({ id, text, formatting }: SectionType) {
    this.id = id
    this._text = text
    this._formatting = formatting || []
  }

  get text(): string {
    return this._text
  }

  get formatting(): FormattingType[] {
    return this._formatting
  }

  toString(): SectionType {
    return {
      id: this.id,
      text: this.text,
      formatting: this.formatting,
    }
  }
}

export { SectionModel }
