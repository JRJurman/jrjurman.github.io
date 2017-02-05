const html = require('choo/html');

const linkStyle = `
  color: inherit;
  text-decoration: inherit;
`

module.exports = (text, link) => {
  return html`
    <h3>
      <a  style=${linkStyle}
          href="${link}">
        ${text}
      </a>
    </h3>
  `
}
