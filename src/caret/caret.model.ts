import { CaretCoordinatesType, CaretStyleType } from '../types'
import { createNanoEvents, DefaultEvents, Emitter } from 'nanoevents'

class CaretModel {
  id: string = ''
  name: string = ''
  sectionId: string = ''
  positionOffset: number = 0
  isVisible: boolean = false
  coordinates: CaretCoordinatesType = {
    top: 0,
    left: 0,
  }
  style: CaretStyleType = {
    height: 0,
  }
  emitter: Emitter<DefaultEvents>

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
    this.emitter = createNanoEvents()
  }

  setCoordinates(top: number, left: number) {
    this.coordinates.top = top
    this.coordinates.left = left
    this.emitter.emit('change')
  }

  setPositionOffset(offset: number) {
    this.positionOffset = offset
    this.emitter.emit('change')
  }

  setHeight(height: number) {
    this.style.height = height
    this.emitter.emit('change')
  }

  setSectionId(sectionId: string) {
    this.sectionId = sectionId
  }
}

export { CaretModel }
