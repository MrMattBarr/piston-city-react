import React, { Component } from 'react';
import RelatedRule from './RelatedRule.js';
 
// Task component - represents a single todo item
export default class Rule extends Component {
  render() {
  	rule = this.props.rule;
    return (
    	<div className="rule-section">
	    	<div className="section-header">{rule.name}</div>
	    	{this.renderRelatedRules()}
	    	<div className="rule-content" dangerouslySetInnerHTML={{__html: rule.content}}></div>
    	</div>
    );
  }


  renderRelatedRules() {
  	rule = this.props.rule;
  	if(!rule.relatedRules || rule.relatedRules.length == 0){
  		return null;
  	}
    relatedRulesRender = rule.relatedRules.map(relatedRule => <RelatedRule ruleId={relatedRule} key={relatedRule}/>);
    return (
	  	<div className="related-rules">
        <strong>Related Rules: </strong>
	  	  {relatedRulesRender}
	  	</div>
  	);
  }


}