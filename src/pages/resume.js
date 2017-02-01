const html = require('choo/html');

const containerStyle = `
  text-align: center;
  margin: 0em 4em;
`

module.exports = () => {
  return html`
    <div class="text-warning" style=${containerStyle}>
      <h1>
        Resume is in the works!<br>
        Come back soon!
      </h1>
    </div>
  `
}
