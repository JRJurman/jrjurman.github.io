const html = require('choo/html');
const textblock = require('../elements/textblock');
const projectblock = require('../elements/projectblock');

const containerStyle = `
  max-width: 600px;
  margin: auto;
  color: #704586;
`

const reverseStyle = `
  transform: scaleX(-1);
`


module.exports = () => {
  return html`
    <div style=${containerStyle}>
      ${textblock(
        html`<img src='/assets/movies/barbarella.png'>`,
        html`<h3>
          Aside from web apps, I've worked on frameworks,
          small libraries, chrome extensions, and hardware projects.
        </h3>`
      )}
      ${textblock(
        html`<h3>
          Below I've listed some of my favorites, but you can view them all on
          <a href="https://github.com/JRJurman">github.com/JRJurman</a>.
        </h3>`,
        html`<img src='/assets/movies/galaxina.png'>`
      )}
      ${projectblock(
        'Tram One', '/assets/programs/tram-one.png',
        html`<a href="https://tram-one.io/">tram-one.io</a>`,
        html`
          <h4>
            Modern View Framework For Pure Javascript
            You can read more about it <a href="https://tram-one.io/">on the website</a>,
            and you can read the documentation and source <a href="https://github.com/Tram-One/tram-one">on github</a>!
          </h4>
        `
      )}
      ${projectblock(
        'Hover Engine', '/assets/programs/hover-engine.png',
        html`<a href="https://github.com/Tram-One/hover-engine">github.com/Tram-One/hover-engine</a>`,
        html`
          <h4>
            Lightweight State-Engine Library based on Redux, with a built-in queue to handle async actions.
            It is the state engine library powering Tram-One!
            <a href="https://www.npmjs.com/package/hover-engine">Read more on npmjs</a>
            Collaborative Project with <a href="https://github.com/ethanjurman">Ethan Jurman</a>
          </h4>
        `
      )}
      ${projectblock(
        'url-listener', '/assets/programs/url-listener.png',
        html`<a href="https://github.com/Tram-One/url-listener">github.com/Tram-One/url-listener</a>`,
        html`
          <h4>
            Library to help control navigation between push and pop states, url changes, and clicks.
            <a href="https://www.npmjs.com/package/url-listener">Read more on npmjs</a>
          </h4>
        `
      )}
      ${projectblock(
        'Ticket Printer', '/assets/programs/ticketprinter.png',
        html`<a href="https://github.com/JRJurman/ticket-printer">github.com/JRJurman/ticket-printer</a>`,
        html`
          <h4>
            Chrome Extension and Server to print work items from Jira, Trello, and Github.
            Uses a <a href="https://www.adafruit.com/products/597">receipt printer</a>,
            and a <a href="https://tessel.io/">Tessel 2</a>.
            You can watch it <a href="https://www.youtube.com/watch?v=sOBhAbXNgUI">in action</a>
            or hear about <a href="https://www.youtube.com/watch?v=84utpGbwJKU">the hardware</a> on youtube!
          </h4>
        `
      )}
      ${projectblock(
        'ASLe16', '/assets/programs/asle16.png',
        html`<a href="https://github.com/JRJurman/ASLe16">github.com/JRJurman/ASLe16</a>`,
        html`
          <h4>
            Collaborative project with <a href="https://github.com/ethanjurman">Ethan Jurman</a>
            to build an encoding of American Sign Language that fits into a 16 bit space.
            Uses python for logic and blender for rendering poses.
            <a href="https://github.com/JRJurman/ASLe16/blob/master/termpaper.pdf">
            You can read the term paper written on github.
            </a>
          </h4>
        `
      )}
      ${projectblock(
        'Space Jam - 3D Volumetric Display Software', '/assets/programs/spacejam.png',
        html`<a href="https://github.com/JRJurman/SpaceJam">github.com/JRJurman/SpaceJam</a>`,
        html`
          <h4>
            A collaborative project by RIT students in the Society of Software
            Engineers and the Center for Imaging Science to make a true 3D display.
            Read more at:
            <a href="https://jrjurman.github.io/SpaceJam/">jrjurman.com/SpaceJam</a>
          </h4>
        `
      )}
      ${projectblock(
        'PowerLS', '/assets/programs/powerls.png',
        html`<a href="https://github.com/JRJurman/PowerLS">github.com/JRJurman/PowerLS</a>`,
        html`
          <h4>
            PowerShell Script to display files and directories like unix's ls.
            Provides colorful and simple output, making navigation easier.
          </h4>
        `
      )}
    </div>
  `
}
