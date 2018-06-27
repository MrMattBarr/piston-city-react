import React, { Component } from 'react';
import { Icons } from '../../../api/icons.js';
import { withTracker } from 'meteor/react-meteor-data';
import Rule from './Rule.js';
import '/imports/less/iconRule.less';
 
// Task component - represents a single todo item
class IconRule extends Rule {
  renderBody(){
    const iconSet = this.props.icons.map(icon => {
        return this.renderIcon({icon});
    });

    return(
      <div id='icon-rule' className='rule-content'>
        {iconSet}
      </div>
    );
  }

  renderIcon({icon}){
    return(
      <div className="icon" key={icon._id}>
        <div className="icon-header">
          <img src={icon.img}/>
          <span>{icon.name}</span>
        </div>
        <div className="icon-description" dangerouslySetInnerHTML={{__html: icon.description}}></div>
      </div>
    );
  }
}


export default withTracker(({filters}) => {
  return {
    icons: Icons.find({}).fetch()
  };
})(IconRule);