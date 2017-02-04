const html = require('choo/html');

const containerStyle = `
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class PictureBlock extends HTMLElement {
  createdCallback () {
    this.createShadowRoot();
  }
  attachedCallback () {
    const children = Array.prototype.reduce
      .call(this.childNodes, (childState, child, index, childNodes) => {
        const childCopy = child.cloneNode(true);

        // if this is a header tag, mark that we've seen one
        const seenHeaders = childState.seenHeaders ||
                            (childCopy.tagName && childCopy.tagName[0] === 'H');

        const children = (() => {
          // if this isn't an image,
          // just return the children with whatever tag we have
          if (childCopy.tagName !== 'IMG') {
            return childState.children.concat(childCopy);
          }

          // this is an image tag, add styles to it
          childCopy.style.width = '3em';
          childCopy.style.height = '3em';
          childCopy.style.borderRadius = '50%';

          // if we've seen a header, prepend a space
          // if there's a header in front of us, append a space
          if (seenHeaders) {
            return childState.children.concat(
              html`<div style='margin: 0.25em'></div>`,
              childCopy
            );
          } else {
            return childState.children.concat(
              childCopy,
              html`<div style='margin: 0.25em'></div>`
            );
          }
        })();

        return Object.assign( {}, {children}, {seenHeaders} );
    }, {children: [], seenHeaders: false}).children;

    // build the DOM that will live in the shadow, with it's children
    const shadow = html`
      <div>
        <link rel="stylesheet" href="/assets/cosmo.min.css">
        <h2 style=${containerStyle}>
          ${children}
        </h2>
      </div>
    `;
    this.shadowRoot.appendChild(shadow);
  }
}

document.registerElement('picture-block', PictureBlock)
