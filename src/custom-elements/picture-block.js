const html = require('choo/html');

class PictureBlock extends HTMLElement {
  createdCallback () {
    console.log(this.childNodes);
    this.createShadowRoot();
  }
  attachedCallback () {
    console.log(this.childNodes);
    this.shadowRoot.appendChild.apply(this.shadowRoot, this.childNodes);
  }
}

document.registerElement('picture-block', PictureBlock)
