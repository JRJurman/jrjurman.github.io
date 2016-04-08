// header.jsx
// created by Jesse Jurman

import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

import Menu from './menu.jsx';

export class Header extends Component {
  onTitleClick() {
    window.location.href = "/";
  }

  render() {
    const titleStyle = {
      fontSize: '4em'
    }

    const headerStyle = {
      textAlign: 'center'
    }

    return (
      <div style={ headerStyle }>
        <h1 className="title" 
          onClick={ this.onTitleClick } 
          style={ titleStyle }>
          Jesse Jurman
        </h1>
        <Menu />
      </div>
    );
  }
};

export default Header;
