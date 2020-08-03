export function getCaretCharacterOffset(element: HTMLElement) {
  let caretOffset = { start: 0, end: 0, isCollapsed: true }
  let selection = window?.getSelection()

  if (selection && selection.rangeCount > 0) {
    var range = window?.getSelection()?.getRangeAt(0)

    if (range) {
      var preCaretRange = range.cloneRange()
      preCaretRange.selectNodeContents(element)
      preCaretRange.setEnd(range.endContainer, range.endOffset)

      var preCaretRange = range.cloneRange()
      preCaretRange.selectNodeContents(element)
      preCaretRange.setEnd(range.startContainer, range.startOffset)
      caretOffset.start = preCaretRange.toString().length
      preCaretRange.setEnd(range.endContainer, range.endOffset)
      caretOffset.end = preCaretRange.toString().length

      caretOffset.isCollapsed = caretOffset.start === caretOffset.end
    }
  }

  return caretOffset
}
