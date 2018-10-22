import React, { Component } from 'react';
import { Components } from '../../../api/components.js';
import { withTracker } from 'meteor/react-meteor-data';
import Rule from './Rule.js';
import '/imports/less/componentRule.less';
 
// Task component - represents a single todo item
class ComponentRule extends Rule {
  renderBody(){
    const componentSet = this.props.components.map(component => {
        return this.renderComponent({component});
    });

    return(
      <ul id='component-rule' className='rule-content'>
        {componentSet}
      </ul>
    );
  }

  renderComponent({component}){
    const imageSrc = "/images/beatdown/components/" + component.img + ".png";
    return(
      <li className="component" key={component._id}>
        <div className="component-name">{component.name}</div>
        <img src={imageSrc}/>
      </li>
    );
  }
}


export default withTracker(({filters}) => {
  return {
    components: Components.find({}).fetch()
  };
})(ComponentRule);