const html = require('choo/html');

const containerStyle = `
  text-align: center;
  margin: 0em 4em;
`

const imageStyle = `
  width: 600px;
  height: auto;
`

module.exports = () => {
  return html`
    <div class="text-info" style=${containerStyle}>
      <h1>
        I'm always building something on github!
        <br><br>
        <a href="https://github.com/jrjurman">github.com/jrjurman</a>
        <br><br>
        Below are some of the highlights!
      </h1>
    </div>
  `
}
