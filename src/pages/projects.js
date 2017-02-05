const html = require('choo/html');
const textblock = require('../elements/textblock');
const projectblock = require('../elements/projectblock');

const containerStyle = `
  max-width: 600px;
  margin: auto;
`

const reverseStyle = `
  transform: scaleX(-1);
`


module.exports = () => {
  return html`
    <div class="text-info" style=${containerStyle}>
      ${textblock(
        html`<img src='/assets/movies/galaxina.png'>`,
        html`<h2>
          Aside from web apps, I've worked on small libraries,
          chrome extensions, and desktop apps.
        </h2>`
      )}
      ${textblock(
        html`<img src='/assets/movies/barbarella.png'>`,
        html`<h2>
          Below I've listed some of my favorites, but you can view them all on
          <a href="https://github.com/JRJurman">github.com/JRJurman</a>.
        </h2>`
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
            A project spearheaded by myself and Cicely DiPaulo to make a true 3D display.
            A collaborative project by RIT students in the Society of Software Engineers and the Center for Imaging Science.
            Read more at:
            <a href="https://jrjurman.github.io/SpaceJam/">jrjurman.com/SpaceJam</a>
          </h4>
        `
      )}
      ${projectblock(
        'localinstall', '/assets/programs/localinstall.png',
        html`<a href="https://github.com/JRJurman/localinstall">github.com/JRJurman/localinstall</a>`,
        html`
          <h4>
            npm package to pack and install npm packages into themselves.
            Useful for running tests against the distributable that other npm users will be using.
            <a href="https://www.npmjs.com/package/localinstall">Read more on npmjs</a>
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
