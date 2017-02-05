const choo = require('choo');
const html = require('choo/html');
const app = choo();

const layout = require('./components/layout');
const about = require('./pages/about');
const webapps = require('./pages/webapps');
const projects = require('./pages/projects');
const resume = require('./pages/resume');

const renderState = require('./models/renderState');

app.model(renderState);

app.router([
  ['/', layout.bind(this, about)],
  ['/about', layout.bind(this, about)],
  ['/web-apps', layout.bind(this, webapps)],
  ['/projects', layout.bind(this, projects)],
  ['/resume', layout.bind(this, resume)]
]);

const tree = app.start();
document.body.appendChild(tree);
