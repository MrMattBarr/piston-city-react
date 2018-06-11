import React, { Component } from 'react';
import RelatedRule from './RelatedRule.js';
import { RulesSections } from '../../../api/rulesSections.js';
 
// Task component - represents a single todo item
export default class Rule extends Component {
  render() {
  	rule = this.props.rule;
    ruleClass = "rule-section";
    if(this.props.emphasized){
      ruleClass += ' emphasized';
    }
    return (
    	<div className={ruleClass}>
	    	<div className="section-header" onClick={this.selectRule.bind(this)} > {rule.name} </div>
	    	{this.renderRelatedRules()}
	    	<div className="rule-content" dangerouslySetInnerHTML={{__html: rule.content}}></div>
    	</div>
    );
  }

  selectRule(){
    rule = this.props.rule;
    ruleSection = RulesSections.findOne({_id: rule.section});
    this.props.selectRule({rule: this.props.rule.uri, section:ruleSection.uri});
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