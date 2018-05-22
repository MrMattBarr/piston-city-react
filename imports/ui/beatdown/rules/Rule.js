import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class Rule extends Component {
  render() {
  	rule = this.props.rule;
    return (
    	<div className="rule-section">
	    	<div className="section-header">{rule.name}</div>
	    	<div className="rule-content" dangerouslySetInnerHTML={{__html: rule.content}}></div>
    	</div>
    );
  }
}