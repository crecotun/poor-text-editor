import { Editor } from './editor'

const editorElement = document.querySelector('#app')

if (editorElement) {
  const editor = new Editor(editorElement)
}
