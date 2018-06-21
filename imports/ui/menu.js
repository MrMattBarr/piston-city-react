import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import '/imports/less/menu.less';
 
// Task component - represents a single todo item
class Menu extends Component {
  render() {
    return (
    	<div className="top-menu desktop-only">
		    <div className="nav-option" onClick={this.goToHome.bind(this)}>
		      <div className="title">Piston City Games</div>
		    </div>
		    <div className="nav-option beatdown-nav" onClick={this.goToBeatdown.bind(this)}>
		        <div className="title">Beatdown</div>
		        <div className="subtitle">Streets of Justice</div>
		    </div>
		    <div className="nav-option corruption-nav" onClick={this.goToCorruption.bind(this)}>
		      <div className="title">DATA:</div>
		      <div className="subtitle">Corruption</div>
		    </div>
	    </div>
    );
  }

  goToBeatdown(){
    this.props.history.push("/beatdown");
  }

  goToHome(){
    this.props.history.push("/home");
  }

  goToCorruption(){
    this.props.history.push("/data-corruption");
  }
}


export default withTracker(() => {
  return {};
})(Menu);