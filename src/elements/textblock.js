const html = require('choo/html');

const containerStyle = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25em 0em;
`

module.exports = (first, second) => {

  const imageStyle = `
    width: 3em;
    height: 3em;
    border-radius: 50%;
  `

  const children = [first, second].map((child) => {
    const childCopy = child.cloneNode(true);
    if (child.tagName === 'IMG') {
      // this is an image tag, add styles to it
      childCopy.style.width = '3em';
      childCopy.style.height = '3em';
      childCopy.style.borderRadius = '50%';
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
