import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Rules } from '../../../api/rules.js';
 
// Task component - represents a single todo item
class RelatedRule extends Component {
  render() {
    return (
  		<div className="related-rule">{this.props.rule.name}</div>
    );
  }
}


export default withTracker((filters) => {
  return {
    rule: Rules.findOne({_id: filters.ruleId}, {fields: {name:1}})
  };
})(RelatedRule);