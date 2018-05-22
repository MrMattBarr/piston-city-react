import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
// App component - represents the whole app
class BeatdownSocialMedia extends Component {
 
  render(){
    return(
      <div className="social-media">
        <h3>More Ways To Stay In Touch</h3>
        <p>The best way to keep up with what we're doing is to follow us on Facebook. Major updates and milestones, information on our upcoming <strong>Kickstarter</strong> campaign and setting up playtests. We've got a twitter too. Tweet at us. We'll tweet back at you. Guaranteed. That's a pretty reckless guarantee. Please don't make us regret it.</p>
        <div className="flex space-around">
          <a target="blank" href="http://www.facebook.com/beatdownJustice">
            <i className="fa fa-facebook"></i>
            <div>Check us out on Facebook</div>
            </a>
          <a target="blank" href="http://www.twitter.com/beatdownJustice">
            <i className="fa fa-twitter"></i>
            <div>Check us out on Twitter</div>
          </a>
        </div>
      </div>
      );
  }

}
export default withTracker(() => {
  return {};
})(BeatdownSocialMedia);