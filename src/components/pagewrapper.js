const html = require('choo/html');

const { actions } = require('../models/renderState');

module.exports = (page, state, prev, send) => {
  let vhs = (() => {
    // don't run this logic if we're server-side-rendering
    if (!state.server) {
      if (  (!prev) ||
            (prev.location.pathname !== state.location.pathname)
      ) {
        send(actions.pause);
        send(actions.rerender, !prev ? 1400 : 100);
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
        className:"vhs-flicker"
      };
    }
  })();

  const vhsDisplay = `
    display: ${vhs.display};
  `

  const vhsClass = vhs.className;

  return html`
    <div style=${vhsDisplay} class=${vhsClass}>
      ${page()}
    </div>
  `
}
