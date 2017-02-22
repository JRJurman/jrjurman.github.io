const html = require('choo/html');

const iconheader = require('../elements/iconheader');
const navbar = require('../elements/navbar');
const footer = require('../elements/footer');
const pageWrapper = require('./pagewrapper');


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
`

module.exports = (pageComponent, state, prev, send) => {
  const page = pageWrapper.bind(this, pageComponent, state, prev, send);

  return html`
    <div style=${chromeStyle}>
      ${iconheader()}
      <div style=${navbarStyle}>
        ${navbar()}
      </div>
      <div style=${pageStyle}>
        ${page()}
      </div>
    </div>
  `
}
