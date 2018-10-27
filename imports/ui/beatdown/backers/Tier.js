import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Backers } from '../../../api/backers.js';

import Backer from './Backer.js';
 

class Tier extends Component {


  render() {
    if(this.props.backers.length == 0){
      return null;
    }
    const tier = this.props.tier;
    const backersRender = this.props.backers.map(backer => {
      return (<Backer 
        backer={backer} 
        key={backer._id}/>);
    });
    return(
      <div className="tier">
          <div className="tier-name">{tier.name}</div>
          <div className="description">{tier.description}</div>
          {backersRender}
      </div>
    );
  }
}


export default withTracker(({tier}) => {
  return {
    backers: Backers.find({tier: tier._id}).fetch()
  };
})(Tier);