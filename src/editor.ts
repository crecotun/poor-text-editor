import { EditorCore } from './core'

class Editor {
  $editor: Element
  core: EditorCore

  constructor($editor: Element) {
    this.$editor = $editor
    this.core = new EditorCore()

    this.core.addSection({
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
    })

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
