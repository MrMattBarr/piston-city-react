import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Rules } from '../../../api/rules.js';

import Rule from './Rule.js';
import IconRule from './IconRule.js';
import ComponentRule from './ComponentRule.js';
 
// Task component - represents a single todo item
class Ruleset extends Component {

  constructor(props) {
    super(props);

    this.customRuleRenders = {
      icons: IconRule,
      components: ComponentRule
    }

    this.state = {
      collapseAll: false
    };
  }

  render() {
    const rulesRender = this.props.rules.map(rule => {
      const defaultCollapsed = this.shouldCollapseRule({rule});
      let RuleRenderer = this.customRuleRenders[rule.uri] || Rule;
      return (<RuleRenderer 
        filters={this.props.filters} 
        selectRule={this.props.selectRule} 
        emphasized={rule.uri && rule.uri == this.props.emphasized} 
        rule={rule} 
        defaultCollapsed={defaultCollapsed}
        key={rule._id}/>);
    });
    return(
      <div className="rules-body" onClick={this.props.onClick}>
        <div className="rule-section">
          {this.renderTopBar()}
          {rulesRender}
        </div>
      </div>
    );
  }


  shouldCollapseRule({rule}){
    return this.state.collapseAll;
  }


  renderTopBar(){
    return(<div className='phone-only top-bar'>
      {this.renderToggleCollapse()}
    </div>);
  }


  renderToggleCollapse(){
    let iconClass = " collapse-toggle fa";
    if(this.state.collapseAll){
      iconClass += " fa-plus-square";
    } else {
      iconClass += " fa-minus-square";
    }

    return(
      <i className={iconClass} onClick={this.toggleCollapseAll.bind(this)}></i>
    );
  }

  toggleCollapseAll(){
    this.setState({collapseAll: !this.state.collapseAll});
  }
}


export default withTracker(({filters}) => {
  return {
    rules: Rules.find(filters, {sort: {position: 1}}).fetch()
  };
})(Ruleset);