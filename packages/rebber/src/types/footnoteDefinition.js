module.exports = notes

const defaultMacro = (identifier, text, protect) => {
  const footnote = `\\footnotetext[${identifier}]{\\label{footnote:${identifier}} ${text}}`
  if (protect) {
    return `${footnote}\\protect`
  }
  return footnote
}

function notes (ctx, node) {
  const macro = ctx.footnoteDefinition || defaultMacro
  const protect = !!node.inHeading

  return macro(node.identifier, require('../all')(ctx, node, protect).trim())
}
