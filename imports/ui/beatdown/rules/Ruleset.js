import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Rules } from '../../../api/rules.js';

import Rule from './Rule.js';
 
// Task component - represents a single todo item
class Ruleset extends Component {
  render() {
    rulesRender = this.props.rules.map(rule => <Rule filters={this.props.filters} selectRule={this.props.selectRule} emphasized={rule.uri && rule.uri == this.props.emphasized} rule={rule} key={rule._id}/>);
  	return(
      <div className="rules-body" onClick={this.props.onClick}>
        <div className="rule-section">
          {rulesRender}
        </div>
      </div>
    );
  }
}


export default withTracker(({filters}) => {
  return {
    rules: Rules.find(filters, {sort: {position: 1}}).fetch()
  };
})(Ruleset);