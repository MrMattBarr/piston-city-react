import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
// App component - represents the whole app
class BeatdownGameSummary extends Component {
 
  render(){
    return(
      <div className="summary">
        <div className="game-preview">
          <img src="images/beatdown/preview.png" />
        </div>
        <div className="grow"></div>
        <div className="about-the-game">
          <a className="shop-button" href="https://shop.trycelery.com/page/5ba9b1dbd171f61400f2cd44" target="_new">
            <i className="fa fa-money"></i>
            <span>Preorder Today</span>
          </a>
          <ul>
            <li><strong>Players: </strong>1-4</li>
            <li><strong>Play Mode: </strong>Fully Cooperative</li>
            <li><strong>Mechanics: </strong> Hand Management, Press Your Luck</li>
            <li><strong>Release Date: </strong>2019</li>
          </ul>
        </div>
      </div>
      );
  }

}
export default withTracker(() => {
  return {};
})(BeatdownGameSummary);