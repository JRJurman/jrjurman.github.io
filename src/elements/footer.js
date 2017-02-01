const html = require('choo/html');

const footerStyle = `
  text-align: center;
  color: white;
  background: #454545;
  padding: 0.25em;
  width: 100%;
`

module.exports = () => {
  return html`
    <footer style=${footerStyle} class="vhs-bottom vhs-delay-6">
      <h5>Jesse Jurman</h5>
    </footer>
  `
}
