import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { RulesSections } from '../../../api/rulesSections.js';

import Ruleset from './Ruleset.js';
import PhoneNav from './PhoneNav.js';
import FaqSection from './FaqSection.js';

import '/imports/less/beatdown.less';
import '/imports/less/beatdownRules.less';
 
// App component - represents the whole app
class BeatdownRulesPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedSection: "intro",
      phoneNavOpen: false,
      selectedRule: null,
      query: null
    };
  }

 componentWillReceiveProps(props){
    const basePageUrl = props.match.url;
    const fullUrl = props.location.pathname;
    const slicedUrl = fullUrl.replace(basePageUrl, '');
    let subPages = slicedUrl.split('/')
    subPages = _.filter(subPages, (x)=>x.length > 0);
    this.setState({
      selectedSection: subPages[0] || "intro",
      selectedRule: subPages[1]|| null
    });
 }


 componentWillMount(){
    basePageUrl = this.props.match.url;
    fullUrl = this.props.location.pathname;
    slicedUrl = fullUrl.replace(basePageUrl, '');
    subPages = slicedUrl.split('/')
    subPages = _.filter(subPages, (x)=>x.length > 0);
    this.setState({
      selectedSection: 'intro',
      selectedRule: subPages[1]|| null
    });
  }

 
  render() {
    section = _.find(this.props.sections, (x)=> x.uri == this.state.selectedSection);
    if(!section){
      return null;
    }
	  return (
		  <div id="beatdown-page">
    		<div className="read-block flexy">
				  <div id="beatdown-rules">
				  	{this.renderNavSection()}
            {this.renderRuleset({section})}
            <PhoneNav openPhoneNav={this.openPhoneNav.bind(this)}
             open={this.state.phoneNavOpen}
             sections={this.props.sections} 
             selected={this.state.selectedSection}
             select={this.selectSection.bind(this)}
            />
	    		</div>
    		</div>
		  </div>
    );
  }

  renderRuleset({section}){
    if(section.uri == 'faq'){
      return <FaqSection />
    }
    filters = {
      section: section._id
    };
    if(this.state.query != null)
      filters = {
        searchableContent: this.state.query
      };
    return(
      <Ruleset
        onClick={this.closePhoneNav.bind(this)}
        filters={filters}
        selectRule={this.selectSection.bind(this)}
        emphasized={this.state.selectedRule} />
      );
  }


  openPhoneNav(){
    this.setState({phoneNavOpen: true});
  }


  closePhoneNav(){
    this.setState({phoneNavOpen: false});
  }


  selectSection({section, rule}){
    this.setState({
      selectedSection: section,
      selectedRule: rule || null
    }, ()=> {
      baseUri = this.props.match.url;
      newUri = baseUri + '/' + section;
      if(rule){
        newUri += '/' + rule;
      }
      this.props.history.push(newUri);
      this.closePhoneNav();
    });
  }


  renderNavSection(){
    sectionRenders = this.props.sections.map(section => {
      sectionClass = 'entry'
      if(section.uri == this.state.selectedSection){
        sectionClass += " selected";
      }

      return(
        <div className={sectionClass} onClick={this.selectSection.bind(this, {section:section.uri})} key={section._id}>
          <span className="inner-entry">{section.name}</span>
        </div>
      );
    }
    );

  	return(
		  <div id="beatdown-rules-nav">
				<div className="entries desktop-only">
          {sectionRenders}
				</div>
		    <div className="search-holder">
          {this.renderRulesSearch()}
				</div>
			</div>
		);
  }

  renderRulesSearch (){
    placeholder = "Search the rules";
    disabled = false
    section = _.find(this.props.sections, (x)=> x.uri == this.state.selectedSection);
    if(section.uri == 'faq'){
      disabled = true;
      placeholder = "Unable to search FAQs"
    }
    return(
      <input disabled={disabled} onChange={this.updateSearch.bind(this)} placeholder={placeholder} />
    );
  }


  updateSearch(source){
    query = source.target.value.toLowerCase()
    if(query.length > 1){
      this.setState({query: new RegExp('.*' + query + '.*')});
    } else {
      this.setState({query: null})
    }
  }
}

export default withTracker(() => {
  return {
    sections: RulesSections.find({}, {sort: {position: 1}}).fetch()
  };
})(BeatdownRulesPage);