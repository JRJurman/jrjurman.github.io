const html = require('choo/html');
const textblock = require('../elements/textblock');
const projectblock = require('../elements/projectblock');

const containerStyle = `
  max-width: 600px;
  margin: auto;
  color: #9e0225;
`

const reverseStyle = `
  transform: scaleX(-1);
`

const projectTitleStyle = `
  margin: 0px;
`

module.exports = () => {
  return html`
    <div style=${containerStyle}>
      ${textblock(
        html`<h3>
          I love building small web-apps.
          Below I've listed a couple of apps
          that you can play with right now!
        </h3>`,
        html`<img  src='/assets/movies/gizmo2.png'>`
      )}
      ${projectblock(
        'Pianola', '/assets/programs/pianola.png',
        html`<a href="https://jrjurman.github.io/pianola">jrjurman.com/pianola</a>`,
        html`
          <h4>
            React app to display piano chords and scales.
            Great on mobile and print!
            Uses SVG logic for rendering and <a href="http://saebekassebil.github.io/teoria/">teoria.js</a> for chords.
          </h4>
        `
      )}
      ${projectblock(
        'Cellular Automata', '/assets/programs/cells.png',
        html`<a href="https://chtinahow.github.io/cellular-automata/">chtinahow.github.io/cellular-automata</a>`,
        html`
          <h4>
            React app to build and display 1D cellular automata patterns.
            Collaborative Project with <a href="https://github.com/chtinahow/">Tina Howard</a>
          </h4>
        `
      )}
      ${projectblock(
        'jrjurman.com', '/assets/programs/website.png',
        html`<a href="https://jrjurman.github.io/">jrjurman.com</a>`,
        html`
          <h4>
            Choo app to display interests and portfolio of work.
            Uses <a href="http://jxnblk.com/vhs/">vhs</a> for css animations, <a href="https://choo.io/">choo</a> for composition and routing.
          </h4>
        `
      )}
      ${projectblock(
        'Vigenere', '/assets/programs/vigenere.png',
        html`<a href="https://jrjurman.github.io/vigenere">jrjurman.com/vigenere</a>`,
        html`
          <h4>
            Simple Choo app to encrypt messages using Vigenere encryption.
            Collaborative Project with <a href="https://github.com/chtinahow/">Tina Howard</a>
          </h4>
        `
      )}
      ${projectblock(
        'Password Generator', '/assets/programs/password.png',
        html`<a href="https://jrjurman.github.io/password-generator/">jrjurman.com/password-generator</a>`,
        html`
          <h4>
            Simple React app to build passwords with different customizations.
            Collaborative Project with <a href="https://github.com/chtinahow/">Tina Howard</a>
          </h4>
        `
      )}
      ${projectblock(
        'Is it a Word?', '/assets/programs/word.png',
        html`<a href="https://jrjurman.github.io/isitaword/">jrjurman.com/isitaword</a>`,
        html`
          <h4>
            Simple vanilla JS app that tells you if something is a word. Great for Scrabble!
            Collaborative Project with <a href="https://github.com/ethanjurman">Ethan Jurman</a>
          </h4>
        `
      )}
      ${projectblock(
        'Tic-Tac-React', '/assets/programs/tictacreact.png',
        html`<a href="https://chtinahow.github.io/tic-tac-react/">chtinahow.github.io/tic-tac-react/</a>`,
        html`
          <h4>
            Simple React app to play Tic-Tac-Toe.
            Collaborative Project with <a href="https://github.com/chtinahow/">Tina Howard</a>
          </h4>
        `
      )}
    </div>
  `
}
