const html = require('choo/html');
const textblock = require('../elements/textblock');

const containerStyle = `
  max-width: 600px;
  margin: auto;
  color: #1a5494;
`

const reverseStyle = `
  transform: scaleX(-1);
`

module.exports = () => {
  return html`
    <div style=${containerStyle}>
      ${textblock(
        html`<img src='/assets/movies/howard.png'>`,
        html`<h3>
          My name is Jesse Jurman.
          I'm a Software Engineer
          working at Constant Contact.
        </h3>`
      )}
      ${textblock(
        html`<h3>
          I'm passionate about software architecture,
          front-end development,
          and software development process models.
        </h3>`,
        html`<img src='/assets/movies/robbie.png'>`
      )}
      ${textblock(
        html`<img  src='/assets/movies/transformers.png'
              style=${reverseStyle}></img>`,
        html`<h3>
        I enjoy building tiny web-apps,
        collecting laserdiscs,
        playing board games,
        and watching 80s movies.
        </h3>`
      )}
    </div>
  `
}
