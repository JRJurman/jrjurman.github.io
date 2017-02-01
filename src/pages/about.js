const html = require('choo/html');
const textblock = require('../elements/textblock');

const containerStyle = `
  max-width: 600px;
  margin: auto;
`

module.exports = () => {
  return html`
    <div class="text-primary" style=${containerStyle}>
      ${textblock(
        '/assets/movies/howard.png',
        `My name is Jesse Jurman.
        I'm a Software Engineer
        working at Constant Contact.`
      )}
      ${textblock(
        `I'm passionate about software architecture,
        front-end development,
        and software process models.`,
        '/assets/movies/robbie.png'
      )}
      ${textblock(
        '/assets/movies/transformers.png',
        `I enjoy building tiny web-apps,
        collecting laserdiscs,
        playing board games,
        and watching 80s movies.`, true
      )}
    </div>
  `
}
