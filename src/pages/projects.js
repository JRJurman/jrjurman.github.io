const html = require('choo/html');
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
    <div class="text-danger" style=${containerStyle}>
      <picture-block>
        <img  src='/assets/movies/gizmo2.png'
              style=${reverseStyle}></img>
        <h2>
          I love building small web-apps,
          below I've listed a couple that
          you can play with right now!
        </h2>
      </picture-block>

      <picture-block>
        <h2>
          I love building small web-apps,
          below I've listed a couple that
          you can play with right now!
        </h2>
        <img  src='/assets/movies/gizmo2.png'>
      </picture-block>
    </div>
  `
}
