const html = require('choo/html');
const textblock = require('../elements/textblock');

const pictureBlock = require('../custom-elements/picture-block');

const containerStyle = `
  max-width: 600px;
  margin: auto;
`

module.exports = () => {
  return html`
    <div class="text-danger" style=${containerStyle}>
      ${textblock(
        '/assets/dark-jrjurman.png',
        `I love building small web-apps,
        below I've listed a couple that
        you can play with right now!`
      )}
      <picture-block>
        <img src='/assets/dark-jrjurman.png'>
        <h2>I love building small web-apps,
        below I've listed a couple that
        you can play with right now!</h2>
      </picture-block>
    </div>
  `
}
