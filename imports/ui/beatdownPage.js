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



  renderHeader() {
    return (
    <div className="overview">
      <div className="header">
      <div className="logo">
        <img src="/images/beatdown/logo.png" />
      </div>

        <a className="mailing-list-button" href="http://eepurl.com/dn3moj" target="_new">
          <i className="fa fa-envelope"></i>
          <span>Join the Mailing List</span>
        </a>
      </div>
      <div>
        <p>"Plan your combo. Save the city together. — A fun, cooperative, strategic crime-fighting card game."</p>
        <p>Beatdown is a 1-4 player fully cooperative card game. Players team up to defeat waves of comic-book criminal and eventually go toe-to-toe with a crime-boss that threatens their city. The group wins if they are able to reach and defeat the boss and lose if all players are simultaneously reduced to 0 hitpoints.</p>
        <p>The core fighting mechanic revolves around building combos by using a mixture of attack cards in hand and from the shared "Attack" deck. Between each attack players must roll a 10-sided combo die to see if they can continue their attack. Each added attack increases the difficulty rating of this roll. A failed combo roll leaves an opening for enemies to attack.</p>
        <p>At the start of the game each player chooses a hero with a unique stat-line and ability. Heroes tend to have roles for group play such as tanky wrestlers or fragile high-damage boxers. Planning the right team to bring can be crucial for defeating the foes that await.</p>
      </div>
    </div>
    );
  }
}
export default withTracker(() => {
  return {  };
})(BeatdownPage);