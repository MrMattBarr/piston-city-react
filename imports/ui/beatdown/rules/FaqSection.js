import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Faqs } from '../../../api/faqs.js';
import Faq from './Faq.js';

// Task component - represents a single todo item
class FaqSection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      askState: null
    };
  }

  render() {
    return(

      <div className="rules-body">
        <div className='rule-section'>
          <div className='rule'>
            <div className="section-header">Ask a Question</div>
            <p>Something not making sense? Found a typo? Let us know below. As questions come in, we'll update the rules and the FAQ. the world's first FAQ actually made up of AQs.</p>
            <div className="faq-section">
              {this.renderTextArea()}
              {this.renderAskButton()}
            </div>
            {this.renderFaqs()}
          </div>
        </div>
      </div>
    );
  }

  renderTextArea() {
    const disabled = this.state.askState != null;
    return(
      <textarea disabled={disabled} ref="questionBox"/>
    );
  }

  ask(){
    if(this.state.askState != null)
      return null
    this.setState({askState: 'asking'});
    const setSuccess = ()=> this.setState({askState: 'success'});
    const question = this.refs.questionBox.value.trim();
    Faqs.insert({question, dateAdded: new Date()});
    setTimeout(setSuccess, 1000);
  }

  renderAskButton() {
    let content = "Ask";
    let buttonClass = "faq-button";
    const askState = this.state.askState;
    const disabled = askState != null;
    if(disabled){
      buttonClass += " disabled"
      if(askState == "asking"){
        content = <i className="fa fa-spinner fa-spin"></i>
      } else if (askState == "success"){
        content = "Done";
        buttonClass += " success";
      }
    }
    return(
      <div className={buttonClass} disabled={disabled} onClick={this.ask.bind(this)}>{content}</div>
    );
  }

  renderFaqs() {
    const faqs = this.props.faqs.map(faq => <Faq model={faq} key={faq._id}/>);
    return(
      <div className="faq-list">
        {faqs}
      </div>
    );
  }
}


export default withTracker(({filters}) => {
  return {
    faqs: Faqs.find({show:true}).fetch()
  };
})(FaqSection);