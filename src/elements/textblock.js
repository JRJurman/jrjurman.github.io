const html = require('choo/html');

const containerStyle = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  font-size: 28px;
`

module.exports = (first, second) => {

  const children = [first, second].map((child) => {
    if (child.tagName === 'IMG') {
      // this is an image tag, add styles to it
      child.style.width = '3.0em';
      child.style.height = '3.0em';
      child.style.borderRadius = '50%';
      child.style.border = 'solid 1px #454545';
    }
    if (child.tagName && child.tagName.indexOf('H') === 0) {
      // this is an image tag, add styles to it
      child.style.margin = '0px';
    }
    return child;
  });

  return html`
    <h2 style=${containerStyle}>
      ${children[0]}
      <div style='margin: 0.25em'></div>
      ${children[1]}
    </h2>
  `
}
