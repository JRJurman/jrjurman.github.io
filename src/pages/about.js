const html = require('choo/html');
const textblock = require('../elements/textblock');

const containerStyle = `
  max-width: 600px;
  margin: auto;
`

const reverseStyle = `
  transform: scaleX(-1);
`

module.exports = () => {
  return html`
    <div class="text-primary" style=${containerStyle}>
      ${textblock(
        html`<img src='/assets/movies/howard.png'>`,
        html`<h2>
          My name is Jesse Jurman.
          I'm a Software Engineer
          working at Constant Contact.
        </h2>`
      )}
      ${textblock(
        html`<h2>
          I'm passionate about software architecture,
          front-end development,
          and software process models.
        </h2>`,
        html`<img src='/assets/movies/robbie.png'>`
      )}
      ${textblock(
        html`<img  src='/assets/movies/transformers.png'
              style=${reverseStyle}></img>`,
        html`<h2>
        I enjoy building tiny web-apps,
        collecting laserdiscs,
        playing board games,
        and watching 80s movies.
        </h2>`
      )}
    </div>
  `
}
