const html = require('choo/html');

const imagepreloader = require('../elements/imagepreloader');
const { actions: renderActions } = require('../models/renderState');
const { actions: contentfulActions } = require('../models/contentfulState');

module.exports = (page, state, prev, send) => {
  let vhs = (() => {
    // don't run this logic if we're server-side-rendering
    if (!state.server) {
      if (  (!prev) ||
            (prev.location.pathname !== state.location.pathname)
      ) {
        if (!prev) {
          // initial load of contentful
          send(contentfulActions.loadContentful)
        }

        // determine how fast to render the page based on this is the first load or not
        send(renderActions.pause);
        send(renderActions.rerender, !prev ? 1800 : 100);
        return {'display':'none'};
      }
    } else {
      return {
        display:'inherit',
        className:''
      };
    }

    if (state.paused) {
      return {
        display:'none',
        className: ''
      };
    }
    else {
      return {
        display:'inherit',
        className:"vhs-bottom"
      };
    }
  })();

  const vhsDisplay = `
    display: ${vhs.display};
  `

  const vhsClass = vhs.className;

  return html`
    <div style=${vhsDisplay} class=${vhsClass}>
      ${page(state)}
      ${imagepreloader()}
    </div>
  `
}
