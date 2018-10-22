import React, { Component } from 'react';
import RelatedRule from './RelatedRule.js';
import { RulesSections } from '../../../api/rulesSections.js';
 
// Task component - represents a single todo item
export default class PhoneNav extends Component {
  render() {
    let navClass = "phone-only";
    if(this.props.open){
      navClass += " open";
    }
    return (      
      <div id="phone-rules-nav" onClick={this.props.openPhoneNav} className={navClass}>
        {this.renderNavSections()}
      </div>
    );
  }

  renderNavSections(){
    if(this.props.open){
      return this.renderAllSections();
    }else {
      return this.renderSelectedSection();
    }
  }

  renderAllSections(){
    sectionRenders = this.props.sections.map(section => {
      sectionClass = 'entry'
      if(section.uri == this.props.selected){
        sectionClass += " selected";
      }
      clickBind = this.selectSection.bind(this, {section: section.uri});

      return(
        <div className={sectionClass} onClick={clickBind} key={section._id}>
          <span className="inner-entry">{section.name} Rules</span>
        </div>
      );
    });

    return <div className="all-sections">{sectionRenders}</div>
  }

  selectSection({section}){
    this.props.select({section});
  }

  renderSelectedSection(){
    const selectedSection = _.find(this.props.sections, (x)=>x.uri == this.props.selected);
    return(
      <div className="current-section">{selectedSection.name}</div>
    );
  }
}