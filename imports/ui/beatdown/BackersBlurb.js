import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
// App component - represents the whole app
export default class BackersBlurb extends Component {
 
  render(){
    const message = "We're incredibly grateful to our 117 Kickstarter backers that helped bring this game to life. Without you guys, this game literally wouldn't exist. Thank you so much for your support."
    const linkMessage = "Our incredible backers"
    return(
      <div className="backers-blurb">
        <p>{message}</p>
        <div className="backers-button" onClick={this.goToBackers.bind(this)}>
          <i className="fa fa-group"></i>
          <span>{linkMessage}</span>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }

  goToBackers(){
    this.props.history.push("/beatdown/backers");
  }
}