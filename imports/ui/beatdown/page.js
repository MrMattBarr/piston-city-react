import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import BeatdownGameSummary from '/imports/ui/beatdown/summary.js';
import BeatdownSocialMedia from '/imports/ui/beatdown/socialMedia.js';
import BeatdownHeader from '/imports/ui/beatdown/header.js';
import '/imports/less/beatdown.less';
 
// App component - represents the whole app
class BeatdownPage extends Component {
 
  render() {
	  return (
		  <div id="beatdown-page">
		    <div className="read-block">
		      <BeatdownHeader history={this.props.history}/>
		      <BeatdownGameSummary/>
		      <BeatdownSocialMedia/>
		    </div>
		  </div>
    );
  }
}

export default withTracker(() => {
  return {};
})(BeatdownPage);