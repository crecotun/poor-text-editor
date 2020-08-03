import { EditorView } from './editorView'

const editorElement = document.querySelector<HTMLElement>('#app')

if (editorElement) {
  const editor = new EditorView(editorElement)
}
