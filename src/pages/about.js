const html = require('choo/html');
const textblock = require('../elements/textblock');

const containerStyle = `
  max-width: 600px;
  margin: auto;
  color: #1a5494;
`

module.exports = (state) => {
  return html`
    <div style=${containerStyle}>
      ${state.about && state.about.map(block => {
        const tags = [
          html`<img src=${block.image}>`,
          html(['<span>', block.text, '</span>'])
        ]
        return block.orientation == 'right' ?
          textblock(tags[1], tags[0]) :
          textblock(tags[0], tags[1])
      })}
    </div>
  `
}
