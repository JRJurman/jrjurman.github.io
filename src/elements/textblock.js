const html = require('choo/html');

const containerStyle = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`

module.exports = (first, second) => {

  const children = [first, second].map((child) => {
    const childCopy = child.cloneNode(true);
    if (child.tagName === 'IMG') {
      // this is an image tag, add styles to it
      childCopy.style.width = '3.3em';
      childCopy.style.height = '3.3em';
      childCopy.style.borderRadius = '50%';
      childCopy.style.border = 'solid 1px #454545';
    }
    if (child.tagName && child.tagName.indexOf('H') === 0) {
      // this is an image tag, add styles to it
      childCopy.style.margin = '0px';
    }
    return childCopy;
  })

  return html`
    <h2 style=${containerStyle}>
      ${children[0]}
      <div style='margin: 0.25em'></div>
      ${children[1]}
    </h2>
  `
}
