import React, { Component } from 'react';
import '/imports/less/menu.less';
 
// Task component - represents a single todo item
export default class Menu extends Component {
  render() {
    return (
    	<div className="top-menu">
		    <a href="/home" className="nav-option" key='piston-city'>
		      <div className="title">Piston City Games</div>
		    </a>
		    <a href="/beatdown" className="nav-option beatdown-nav">
		        <div className="title">Beatdown</div>
		        <div className="subtitle">Streets of Justice</div>
		    </a>
		    <a href="/data-corruption" className="nav-option corruption-nav">
		      <div className="title">DATA:</div>
		      <div className="subtitle">Corruption</div>
		    </a>
	    </div>
    );
  }
}