// page.jsx
// created by Jesse Jurman

import React, { Component } from 'react';
import Header from '../components/header.jsx';

export class Page extends Component {
  render() {
    
    const bodyStyles = {
      margin: '5% auto',
      maxWidth: '800px',
    }

    return (
      <div style={bodyStyles}>
        <Header />
        { this.props.children }
      </div>
    );
  }
};

export default Page;
