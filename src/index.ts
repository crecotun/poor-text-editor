import { EditorView } from './editorView'

const editorElement = document.querySelector('#app')

if (editorElement) {
  const editor = new EditorView(editorElement)
}
