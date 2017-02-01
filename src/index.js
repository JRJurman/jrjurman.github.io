const choo = require('choo');
const html = require('choo/html');
const app = choo();

const layout = require('./components/layout');
const about = require('./pages/about');
const projects = require('./pages/projects');
const github = require('./pages/github');
const resume = require('./pages/resume');

const renderState = require('./models/renderState');

app.model(renderState);

app.router([
  ['/', layout.bind(this, about)],
  ['/about', layout.bind(this, about)],
  ['/projects', layout.bind(this, projects)],
  ['/github', layout.bind(this, github)],
  ['/resume', layout.bind(this, resume)]
]);

const tree = app.start();
document.body.appendChild(tree);
