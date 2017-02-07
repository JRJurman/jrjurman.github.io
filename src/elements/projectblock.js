const html = require('choo/html');
const textblock = require('../elements/textblock');

const projectTitleStyle = `
  margin: 0px;
`

const linkStyle = `
  margin: 0px;
`

const titleLinkStyle = `
  color: inherit;
  text-decoration: inherit;
`

module.exports = (title, imageSRC, linkDOM, contentDOM, reverse) => {

  const reverseCall = reverse ? 'reverse' : 'reverse';

  return html`
    ${textblock.apply(this, [
      html`<h3 style=${projectTitleStyle}>
        <a  style=${titleLinkStyle}
            href=${linkDOM.href}>
              ${title}
        </a>
        <h5 style=${linkStyle}>${linkDOM}</h5>
        <h4>
          ${contentDOM}
        </h4>
      </h3>`,
      html`<img src='${imageSRC}'>`
    ][reverseCall]())}
  `
}
