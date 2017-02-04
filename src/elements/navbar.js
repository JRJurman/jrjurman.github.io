const html = require('choo/html');

const navbutton = require('./navbutton');

const containerStyle = `
  display: block;
`

const navbarStyle = `
  margin: auto;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
`

const navPlaceholderStyle = `
  width: 6em;
`

module.exports = () => {
  const about = navbutton.bind(this, 'About', '/about');
  const projects = navbutton.bind(this, 'Projects', '/projects');
  const github = navbutton.bind(this, 'Github', '/github');
  const resume = navbutton.bind(this, 'Resume', '/resume');

  return html`
    <div style=${containerStyle} class="vhs-flicker vhs-delay-5">
      <div style=${navbarStyle}>
        <div class="text-primary">${about()}</div>
        <div class="text-danger">${projects()}</div>
        <div style=${navPlaceholderStyle}></div>
        <div class="text-info">${github()}</div>
        <div class="text-warning">${resume()}</div>
      </div>
    </div>
  `
}
