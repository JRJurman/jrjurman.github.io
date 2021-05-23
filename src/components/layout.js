const html = require('choo/html');

const header = require('../elements/header');
const navbar = require('../elements/navbar');
const footer = require('../elements/footer');
const pageWrapper = require('./pagewrapper');

const bodyStyle = `
`

const chromeStyle = `
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const pageStyle = `
  height: 100%;
`

const navbarStyle = `
  margin-top: -5em;
  margin-bottom: 2em;
`

module.exports = (pageComponent, state, prev, send) => {
  const page = pageWrapper.bind(this, pageComponent, state, prev, send);

  return html`
    <div style=${bodyStyle}>
      <div style=${chromeStyle}>
        ${header()}
        <div style=${navbarStyle}>
          ${navbar()}
        </div>
        <div style=${pageStyle}>
          ${page(state)}
        </div>
      </div>
    </div>
  `
}
