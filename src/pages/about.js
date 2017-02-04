const html = require('choo/html');
const textblock = require('../elements/textblock');
const pictureBlock = require('../web-components/picture-block');

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
      <picture-block>
        <img src='/assets/movies/howard.png'>
        <h2>
          My name is Jesse Jurman.
          I'm a Software Engineer
          working at Constant Contact.
        </h2>
      </picture-block>
      <picture-block>
        <h2>
          I'm passionate about software architecture,
          front-end development,
          and software process models.
        </h2>
        <img src='/assets/movies/robbie.png'>
      </picture-block>
      <picture-block>
        <img  src='/assets/movies/transformers.png'
              style=${reverseStyle}></img>
        <h2>
          I enjoy building tiny web-apps,
          collecting laserdiscs,
          playing board games,
          and watching 80s movies.
        </h2>
      </picture-block>
    </div>
  `
}
