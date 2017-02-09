const fs = require('fs');
const html = require('choo/html');

const app = require('../src/app');
const template = require('../public/template');
const root = './dist';
const routes = ['', 'about', 'projects', 'resume', 'web-apps'];
const copyName = 'index.html';


// iterate through each route we'll be hosting
routes.forEach((path) => {

  // get the DOM of the path (for noscript)
  const page = `
    <noscript>
      ${app.toString(`/${path}`, {server: true})}
    </noscript>
  `;

  const indexPage = template(page);

  // make a directory in the root
  fs.mkdir( [root, path].join('/'), (direrr) => {
    // write a copy of index to the route path
    const copyPath = [root, path, copyName].join('/');
    fs.writeFile(copyPath, indexPage, (err) => {
      if (err) throw err;
    });

  } );
});
