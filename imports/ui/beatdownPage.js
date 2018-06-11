import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { RulesSections } from '../api/rulesSections.js';
import '/imports/less/beatdown.less';
 
// App component - represents the whole app
class BeatdownPage extends Component {
 
  render() {
  return (
  <div id="beatdown-page">
    <div className="read-block">
      {this.renderHeader()}
      {this.renderSumamry()}
      {this.renderSocialMedia()}
    </div>
  </div>
    );
  }

  renderSocialMedia(){
    return (
      <div className="social-media">
        <h3>More Ways To Stay In Touch</h3>
        <p>The best way to keep up with what we're doing is to follow us on Facebook. Major updates and milestones, information on our upcoming <strong>Kickstarter</strong> campaign and setting up playtests. We've got a twitter too. Tweet at us. We'll tweet back at you. Guaranteed. That's a pretty reckless guarantee. Please don't make us regret it.</p>
        <div className="flex space-around">
          <a target="blank" href="http://www.facebook.com/beatdownJustice">
            <i className="fa fa-facebook"></i>
            <div>Check us out on Facebook</div>
            </a>
          <a target="blank" href="http://www.twitter.com/beatdownJustice">
            <i className="fa fa-twitter"></i>
            <div>Check us out on Twitter</div>
          </a>
        </div>
      </div>
      );
  }


  renderSumamry(){
    return(
      <div className="summary">
        <div className="game-preview">
          <img src="images/beatdown/preview.png" />
        </div>
        <div className="grow"></div>
        <div className="about-the-game">
          <ul>
            <li><strong>Players: </strong>1-4</li>
            <li><strong>Play Mode: </strong>Fully Cooperative</li>
            <li><strong>Mechanics: </strong> Hand Management, Press Your Luck</li>
            <li><strong>Release Date: </strong>2018</li>
          </ul>
        </div>
      </div>
      );
  }


}
export default withTracker(() => {
  return {  };
})(BeatdownPage);