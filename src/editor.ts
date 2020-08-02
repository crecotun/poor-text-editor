import { EditorCore } from './core'

class Editor {
  $editor: Element
  core: EditorCore

  constructor($editor: Element) {
    this.$editor = $editor
    this.core = new EditorCore()

    this.render()
  }

  render() {
    const section = this.core.getSectionById(1)
    if (!section) {
      return
    }

    this.$editor.innerHTML = section.text
  }
}

export { Editor }
