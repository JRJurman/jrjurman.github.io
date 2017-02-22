const html = require('choo/html');

const navbutton = require('./navbutton');

const containerStyle = `
  display: block;
`

const backgroundNavbarStyle = `
  margin: auto;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  margin-bottom: -4.42em;
  color: gray;
`

const frontNavbarStyle = `
  margin: auto;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
`

module.exports = () => {
  const about = navbutton.bind(this, 'About', '/about');
  const webApps = navbutton.bind(this, 'Web Apps', '/web-apps');
  const projects = navbutton.bind(this, 'Projects', '/projects');
  const resume = navbutton.bind(this, 'Resume', '/resume');

  return html`
    <div style=${containerStyle}>
      <div style=${backgroundNavbarStyle}>
        <div>${about()}</div>
        <div>${webApps()}</div>
        <div>${projects()}</div>
        <div>${resume()}</div>
      </div>
      <div style=${frontNavbarStyle} class="vhs-flicker vhs-delay-3">
        <div class="text-primary">${about()}</div>
        <div class="text-danger">${webApps()}</div>
        <div class="text-info">${projects()}</div>
        <div class="text-warning">${resume()}</div>
      </div>
    </div>
  `
}
