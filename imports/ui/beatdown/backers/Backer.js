import React, { Component } from 'react';

export default class Backer extends Component {
  render() {
    const backer = this.props.backer;
    return (
      <div className="backer">
        <div className="name">• {backer.name}</div>
        {this.renderMessage({message: backer.message})}
      </div>
    );
  }

  renderMessage({message}){
    if(!message){
      return null;
    }
    return(
          <div className="message-holder">
            <i className="tail"></i>
            <div className="message">{message}</div>
          </div>
        );
  }
}

