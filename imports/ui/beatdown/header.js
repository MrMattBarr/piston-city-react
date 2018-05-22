import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
// App component - represents the whole app
class BeatdownHeader extends Component {
 
  render(){
    return(
	    <div className="overview">
	    	{this.renderHeader()}
	      {this.renderDescription()}
	    </div>
    );
  }

  renderHeader(){
  	return(
      <div className="header">
	      <div className="logo">
	        <img src="/images/beatdown/logo.png" />
	      </div>
        <a className="mailing-list-button" href="http://eepurl.com/dn3moj" target="_new">
          <i className="fa fa-envelope"></i>
          <span>Join the Mailing List</span>
        </a>
      </div>
	   );
  }

  renderDescription(){
  	return(
	    <div>
	      <p>"Plan your combo. Save the city together. — A fun, cooperative, strategic crime-fighting card game."</p>
	      <p>Beatdown is a 1-4 player fully cooperative card game. Players team up to defeat waves of comic-book criminal and eventually go toe-to-toe with a crime-boss that threatens their city. The group wins if they are able to reach and defeat the boss and lose if all players are simultaneously reduced to 0 hitpoints.</p>
	      <p>The core fighting mechanic revolves around building combos by using a mixture of attack cards in hand and from the shared "Attack" deck. Between each attack players must roll a 10-sided combo die to see if they can continue their attack. Each added attack increases the difficulty rating of this roll. A failed combo roll leaves an opening for enemies to attack.</p>
	      <p>At the start of the game each player chooses a hero with a unique stat-line and ability. Heroes tend to have roles for group play such as tanky wrestlers or fragile high-damage boxers. Planning the right team to bring can be crucial for defeating the foes that await.</p>
	    </div>
    )
  }

}



export default withTracker(() => {
  return {};
})(BeatdownHeader);