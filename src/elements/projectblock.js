const html = require('choo/html');
const textblock = require('../elements/textblock');

const projectTitleStyle = `
  margin: 0px;
  font-size: 28px;
`

const linkStyle = `
  margin: 0px;
  font-size: 20px;
  display: block;
  margin-bottom: 10px
`

const titleLinkStyle = `
  color: inherit;
  text-decoration: inherit;
`

const contentStyle = `
  font-size: 20px;
`

module.exports = (title, imageSRC, linkDOM, contentDOM, reverse) => {

  const reverseCall = reverse ? 'reverse' : 'reverse';

  return html`
    ${textblock.apply(this, [
      html`<h3 style=${projectTitleStyle}>
        <span  style=${titleLinkStyle}
            href=${linkDOM.href}>
              ${title}
        </span>
        <span style=${linkStyle}>${linkDOM}</span>
        <p style=${contentStyle}>
          ${contentDOM}
        </p>
      </h3>`,
      html`<img src='${imageSRC}'>`
    ][reverseCall]())}
  `
}
