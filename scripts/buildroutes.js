const fs = require('fs');

const root = './dist';
const routes = ['about', 'projects', 'resume', 'web-apps'];
const content = './dist/index.html';
const copyName = 'index.html';

// read the index.html
fs.readFile(content, (readerr, index) => {
  if (readerr) throw readerr;

  // iterate through each route we'll be hosting
  routes.forEach((path) => {
    // make a directory in the root
    fs.mkdir( [root, path].join('/'), (direrr) => {
      if (direrr) throw direrr;

      // write a copy of index to the route path
      const copyPath = [root, path, copyName].join('/');
      fs.writeFile(copyPath, index, (err) => {
        if (err) throw err;
      });

    } );
  });

});
