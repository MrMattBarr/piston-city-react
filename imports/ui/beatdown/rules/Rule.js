import React, { Component } from 'react';
import RelatedRule from './RelatedRule.js';
import { RulesSections } from '../../../api/rulesSections.js';
 
// Task component - represents a single todo item
export default class Rule extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: true
    };
  }


 componentWillReceiveProps(props){
    if(props.defaultCollapsed != this.props.defaultCollapsed){
      this.setState({
        expanded: !props.defaultCollapsed
      });
    }
 }


  render() {
    const rule = this.props.rule;
    let ruleClass = "rule";
    if(this.props.emphasized){
      ruleClass += ' emphasized';
    }
    if(this.state.expanded){
      ruleClass += " expanded"
    }
    return (
      <div className={ruleClass}>
        {this.renderRuleHeader()}
        {this.renderBody({rule})}
      </div>
    );
  }


  renderBody({rule}){
    return(
      <div className="rule-content">
        {this.renderReferenceBar({rule})}
        {this.renderRelatedRules()}
        <div dangerouslySetInnerHTML={{__html: rule.content}}></div>
      </div>
    );
  }


  renderReferenceBar({rule}){
    if(!rule.image)
      return null;
    return(
      <div className="rule-reference-bar">
        {this.renderRuleImage({rule})}
      </div>
    );
  }

  renderRuleImage({rule}){
    if(!rule.image){
      return null;
    }
    const imageUrl = "/images/beatdown/rules/" + rule.image;
    return(
      <a className="image-holder" href={imageUrl} target="_new">
        <i className="fa fa-photo"></i>
        <span>{rule.caption}</span>
     </a>
    );
  }


  renderRuleHeader(){
    return(
        <div className="section-header">
          {this.renderDesktopHeader()}
          {this.renderMobileHeader()}
        </div>
    );
  }

  renderDesktopHeader(){
    const rule = this.props.rule;
    return(
      <div className="desktop-only" onClick={this.selectRule.bind(this)}> {rule.name} </div>
    );
  }

  renderMobileHeader(){
    const rule = this.props.rule;
    return(
      <div className="phone-only" onClick={this.toggleExpand.bind(this)}>
        <i className="expander fa fa-caret-right"></i>
        {rule.name}
      </div>
    );
  }

  toggleExpand(){
    this.setState({expanded: !this.state.expanded});
  }


  selectRule(){
    const rule = this.props.rule;
    const ruleSection = RulesSections.findOne({_id: rule.section});
    this.props.selectRule({rule: this.props.rule.uri, section:ruleSection.uri});
  }


  renderRelatedRules() {
    const rule = this.props.rule;
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