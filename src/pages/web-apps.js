const html = require('choo/html');
const textblock = require('../elements/textblock');
const projectblock = require('../elements/projectblock');

const containerStyle = `
  max-width: 600px;
  margin: auto;
  color: #9e0225;
`

module.exports = (state) => {
  const navigateToProjectLink = (event) => {
    event.preventDefault()
    event.stopPropagation()
    window.open(event.target.href, '_blank')
  }
  return html`
    <div style=${containerStyle}>
      ${state.webapps && state.webapps.map(block => {
        // if this is an about block, parse and return a textblock
        if (block.type === 'about') {
          const tags = [
            html`<img src=${block.image}>`,
            html(['<span>', block.text, '</span>'])
          ]
          return block.orientation == 'right' ?
            textblock(tags[1], tags[0]) :
            textblock(tags[0], tags[1])
        }

        // if this is a project block, parse and return a projectblock
        return projectblock(
          block.title, block.image,
          html`<a href=${block.link} onclick=${navigateToProjectLink}>${block.displayLink}</a>`,
          html(['<span>', block.description, '</span>'])
        )
      })}
    </div>
  `
}
