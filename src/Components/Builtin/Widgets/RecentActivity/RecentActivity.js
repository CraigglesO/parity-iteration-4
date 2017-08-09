import * as React  from 'react';

/** Stylesheets **/
import './RecentActivity.css';

class RecentActivity extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="tile-md RecentActivity">
        <div id="accounts-header">RecentActivity</div>
      </div>
    );
  }
}

export default RecentActivity;
