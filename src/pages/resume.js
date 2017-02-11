const html = require('choo/html');
const textblock = require('../elements/textblock');

const containerStyle = `
  max-width: 600px;
  margin: auto;
  color: #a74d11;
`

module.exports = () => {
  return html`
    <div style=${containerStyle}>
      ${textblock(
        html`<img src='/assets/movies/gremlins2.png'>`,
        html`<h3>
          Resume is in the works, I PROMISE!
          Come back soon!
        </h3>`
      )}
    </div>
  `
}
