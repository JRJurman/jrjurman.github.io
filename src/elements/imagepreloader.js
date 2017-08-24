const html = require('choo/html');

const imageStyle = `
  width: 0px; height: 0px;
`

module.exports = () => {
  const movies = [
    'barbarella.png', 'galaxina.png', 'gizmo2.png', 'gremlins2.png',
    'howard.png', 'robbie.png', 'transformers.png'
  ].map(image => html`<img style=${imageStyle} src="/assets/movies/${image}">`)
  const programs = [
    'asle16.png', 'cells.png', 'localinstall.png', 'password.png',
    'pianola.png', 'point-cards.png', 'point-cards.png', 'powerls.png',
    'spacejam.png', 'ticketprinter.png', 'vigenere.png', 'website.png', 'word.png'
  ].map(image => html`<img style=${imageStyle} src="/assets/programs/${image}">`)
  return html`
    <div>
      ${movies}
      ${programs}
    </div>
  `
}
