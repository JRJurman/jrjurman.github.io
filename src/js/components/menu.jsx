// menu.jsx
// created by Jesse Jurman

import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

export class Menu extends Component {
  render() {

    const buttonGroupStyle = {
      float: 'inherit'
    }

    return (
      <ButtonGroup style={ buttonGroupStyle }>
        <Button className="btn-menu" href="/about">About Me</Button>
        <Button className="btn-menu" href="/projects">Projects</Button>
        <Button className="btn-menu" href="https://github.com/jrjurman/">Github</Button>
        <Button className="btn-menu" href="http://jrjurman.com/resume/">Resume</Button>
      </ButtonGroup>
    );
  }
};

export default Menu;
