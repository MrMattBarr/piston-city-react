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
     this.processCurrentPage();
   }.bind(this), 200);
  }

  processCurrentPage(){
      basePageUrl = this.props.match.url;
      fullUrl = this.props.location.pathname;
      slicedUrl = fullUrl.replace(basePageUrl, '');
      subPages = slicedUrl.split('/')
      subPages = _.filter(subPages, (x)=>x.length > 0);

      tabUri = subPages[0] || 'intro';
      selectedTab = _.find(this.props.sections, (x)=>x.uri == tabUri);
      if(selectedTab){
        this.selectSection({section: selectedTab});
      }
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

  selectSection({section}){
    if(section._id != this.state.selectedSectionId){
      this.setState({
        selectedSectionName: section.uri,
        selectedSectionId: section._id
      })

      baseUri = this.props.match.url;
      newUri = baseUri + '/' + section.uri;
      this.props.history.push(newUri);
    }
  }


  renderNavSection(){
    sectionRenders = this.props.sections.map(section => {
      sectionClass = 'entry'
      if(section.uri == this.state.selectedSectionName){
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