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
        'Cocktial Curator', '/assets/programs/cocktail-curator.png',
        html`<a href="http://www.cocktail-curator.com/">cocktail-curator.com</a>`,
        html`
          <h4>
            Tram-One app to search for drinks based on ingredients.
            Powered by <a href="thecocktaildb.com">TheCocktailDB.com</a>.
            Collaborative Project with <a href="https://github.com/chtinahow/">Tina Howard</a>
          </h4>
        `
      )}
      ${projectblock(
        'Point Cards', '/assets/programs/point-cards.png',
        html`<a href="http://point-cards.com/">point-cards.com</a>`,
        html`
          <h4>
            App to play planning poker!
            Uses <a href="http://jxnblk.com/vhs/">vhs</a> for css animations,
            <a href="https://www.npmjs.com/package/express-ws">express-ws</a> for web sockets,
            and <a href="http://tram-one.io">Tram-One</a> for everything else.
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
    </div>
  `
}
