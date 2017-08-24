const html = require('choo/html');

const headerStyle = `
  text-align: center;
  color: white;
  background: #454545;
  padding: 1em;
  z-index: 1;
  margin-bottom: 4em;
`

const linkStyle = `
  color: inherit;
  text-decoration: inherit;
`

const headerImageStyle = `
  margin-top: -2.825em;
`

const imageStyle = `
  width: 2.75em;
  height: 2.75em;
  border-radius: 50%;
  margin-top: -0.3em;
  margin-bottom: -1.9em;
`

const headerPlaceholderStyle = `
  margin-top: 0em;
`

const placeholderStyle = `
  width: 2.75em;
  height: 2.75em;
  border-radius: 50%;
  border: solid 1.5em #454545;
`

module.exports = () => {
  return html`
    <div>
      <div style=${headerStyle}>
        <h1 class="">
          <a style=${linkStyle} href="/">
            Jesse Jurman
          </a>
        </h1>
        <h1 style=${headerPlaceholderStyle}>
          <img style=${placeholderStyle} src="/assets/jrjurman.png">
        </h1>
        <h1 style=${headerImageStyle} class="vhs-pop vhs-delay-3">
          <img style=${imageStyle} src="/assets/jrjurman.png">
        </h1>
      </div>
    </div>
  `
}
