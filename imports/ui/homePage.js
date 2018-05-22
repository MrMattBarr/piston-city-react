import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

export default class HomePage extends Component {
 
  render() {
  return (
	  <div className="read-block">
	    <p>Oh gosh, one second. I didn't expect anyone to actually show up at our website. The usual guy's out but I'm sure I can do this … We are Piston City Games! It was very nice to meet you and we hope we've successfully answered all of your questions today!</p>
	    <p>Nope, that's no good. I didn't answer any of your questions. I didn't even give you a chance to ask any questions. I'm sorry. Let's take it from the top. We are Piston City Games and we're delighted to help explain anything you might have questions about. Is there anything that you have any questions about?</p>
	    <p>…</p>
	    <p>Alright, this isn't going to work if you don't ask me anything. I guess I'll tell you a bit about us. Piston City Games is a tiny 2-person games development team based out of Seattle, Washington: One an artist and the other a tech and design guy. Our goal is to make games that enable the social nature of gaming. Gaming should help you have a good time. Practically that means that we want our players to have interesting choices and tough challenges but not an over-abundance of number-crunching to get there. It's cheesy but we're life-long gamers, we're making the games we want to play, and we hope you have a blast playing them too! </p>
	  </div>
  );
}
}