import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class Faq extends Component {

	render(){
		const faq = this.props.model;
		return(
			<div className="faq">
				<div className='question'>{faq.question}</div>
				<div className='answer'>{faq.answer}</div>
			</div>
		);
	}
}