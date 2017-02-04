const html = require('choo/html');
const textblock = require('../elements/textblock');

const containerStyle = `
  max-width: 600px;
  margin: auto;
`

const reverseStyle = `
  transform: scaleX(-1);
`

module.exports = () => {
  return html`
    <div class="text-danger" style=${containerStyle}>
      ${textblock(
        html`<img  src='/assets/movies/gizmo2.png'
              style=${reverseStyle}></img>`,
        html`<h2>
          I love building small web-apps,
          below I've listed a couple that
          you can play with right now!
        </h2>`
      )}
    </div>
  `
}
