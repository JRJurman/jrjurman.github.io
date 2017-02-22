const html = require('choo/html');

const linkStyle = `
  font-family: clip;
  color: inherit;
  text-decoration: inherit;
`

module.exports = (text, link) => {
  return html`
    <h2>
      <a  style=${linkStyle}
          href="${link}">
        ${text}
      </a>
    </h2>
  `
}
