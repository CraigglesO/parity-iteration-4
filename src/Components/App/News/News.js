import * as React from 'react';

/** Stylesheets **/
import './News.css';

class News extends React.Component {
  props: {
    messages: string
  };

  render() {
    return (
      <div className="col-lg-12 News">
        <div id="news-message-type">
          Warning
        </div>
        <div id="news-message">
          Your wallet may be insecure, click here to find out more.
        </div>
      </div>
    );
  }
}

export default News;
