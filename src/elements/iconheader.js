const html = require('choo/html');

titleStyle = `
  font-family: clip;
  color: white;
  text-align: center;
`

module.exports = () => {
  return html`
    <div class="vhs-flicker vhs-delay-1">
      <h1 style=${titleStyle}>Jesse R. Jurman</h1>
    </div>
  `
}
