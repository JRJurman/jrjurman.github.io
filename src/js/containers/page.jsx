// page.jsx
// created by Jesse Jurman

import React, { Component } from 'react';

export class Page extends Component {
	render() {
		return (
      <div>
        { this.props.children }
      </div>
		);
	}
};

export default Page;
