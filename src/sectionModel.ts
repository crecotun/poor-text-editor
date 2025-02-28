import {
  SectionIdType,
  FormattingType,
  SectionType,
  TextPositionType,
} from './types'
import { Emitter, DefaultEvents, createNanoEvents } from 'nanoevents'

class SectionModel {
  public readonly id: SectionIdType
  private _text: string
  private _formatting: FormattingType[]
  emitter: Emitter<DefaultEvents>

  constructor({ id, text, formatting }: SectionType) {
    this.id = id
    this._text = text
    this._formatting = formatting || []
    this.emitter = createNanoEvents()
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

  applyBold(position: TextPositionType) {
    // apply bold
    // define if part of the range is already styled
    // if it's it, just extend this number
    // if the whole range is applied / remove bold
    // if the part of the range is within current styling remove part of the bold
    // split in several methods
    this.emitter.emit('change')
  }

  insertText(text: string, position: TextPositionType): string {
    const preText = this.text.slice(0, position.from)
    const postText = this.text.slice(position.from)
    let newText = preText + text + postText
    this._text = newText

    // define if the text was set before, after ot inbetween applied styling
    // and recalculate their positions

    this.emitter.emit('change')

    return newText
  }

  deleteText(position: TextPositionType): string {
    // deletes part of the text, from - to position
    const preText = this.text.slice(0, position.from)
    const postText = this.text.slice(position.to)
    const newText = preText + postText
    this._text = newText
    this.emitter.emit('change')

    return newText
  }
}

export { SectionModel }
