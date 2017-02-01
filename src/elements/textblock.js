const html = require('choo/html');

const containerStyle = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25em 0em;
`

module.exports = (first, second, reverse, reverseImage) => {

  const imageStyle = `
    width: 3em;
    height: 3em;
    border-radius: 50%;
    ${reverse ? 'transform: scaleX(-1);' : ''}
  `

  const {firstDOM, secondDOM} = (() => {
    if (first.match(/\s/)) {
      return {  firstDOM: html`<div>${first}</div>`,
                secondDOM: html`<img style=${imageStyle} src=${second}>`  }
    } else {
      return {  secondDOM: html`<div>${second}</div>`,
                firstDOM: html`<img style=${imageStyle} src=${first}>`  }
    }
  })();

  return html`
    <h2 style=${containerStyle}>
      ${firstDOM}
      <div style='margin: 0.25em'></div>
      ${secondDOM}
    </h2>
  `
}
