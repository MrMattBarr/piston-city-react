import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Tier from './Tier.js';
import { BackerTiers } from '../../../api/backers.js';
import '/imports/less/beatdown.less';
import '/imports/less/backers.less';
 
// App component - represents the whole app
class BeatdownBackersPage extends Component {
 
  render() {
    const tiers = this.props.tiers.map(tier => {
      return (<Tier 
        tier={tier} 
        key={tier._id}/>);
    });
    return (
      <div id="beatdown-page">
        <div className="read-block scrollable">
          {tiers}
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    tiers: BackerTiers.find({}).fetch()
  };
})(BeatdownBackersPage);