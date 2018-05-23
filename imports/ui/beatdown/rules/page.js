import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { RulesSections } from '../../../api/rulesSections.js';

import Ruleset from './Ruleset.js';

import '/imports/less/beatdown.less';
import '/imports/less/beatdownRules.less';
 
// App component - represents the whole app
class BeatdownRulesPage extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      selectedSectionName: "",
      selectedSectionId: null,
      query: null
    };
  }


  //TODO: The settimeout here gives the view time to build its collections. There must be a better way.
  componentWillReceiveProps(props){
    setTimeout( function(){
      if(props.sections.length > 0 && this.state.selectedSectionName.length == 0){
        this.selectSection({section: props.sections[0]});
      }
    }.bind(this), 200);
  }

 
  render() {
    filters = {
      section: this.state.selectedSectionId
    };
    if(this.state.query != null)
      filters.searchableContent = this.state.query
	  return (
		  <div id="beatdown-page">
    		<div className="read-block">
				  <div id="beatdown-rules">
				  	{this.renderNavSection()}
            <Ruleset filters={filters} />
	    		</div>
    		</div>
		  </div>
    );
  }


  sanitizeSectionName(name){
    return name.toLowerCase().replace(' ', '-');
  }

  selectSection({section}){
    this.setState({
      selectedSectionName: this.sanitizeSectionName(section.name),
      selectedSectionId: section._id
    })
  }


  renderNavSection(){
    sectionRenders = this.props.sections.map(section => {
      sectionClass = 'entry'
      if(this.sanitizeSectionName(section.name) == this.state.selectedSectionName){
        sectionClass += " selected";
      }

      return(
        <div className={sectionClass} onClick={this.selectSection.bind(this, {section})} key={section._id}>
          <span className="inner-entry">{section.name}</span>
        </div>
      );
    }
    );

  	return(
		  <div id="beatdown-rules-nav">
				<div className="entries">
          {sectionRenders}
				</div>
		    <div className="search-holder">
					<input onChange={this.updateSearch.bind(this)} placeholder="Search the rules" />
				</div>
			</div>
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