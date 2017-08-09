import * as React  from 'react';

/** Stylesheets **/
import './Accounts.css';

class Accounts extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="tile-sm Accounts">
        <div id="accounts-header">Accounts</div>
        <div id="accounts-body">
          <div id="accounts-person">
            <svg id="accounts-person-svg" x="0px" y="0px" width="80px" height="80px" viewBox="6.12 96.12 599.76 599.76">
              <g>
              <path fill="#FFFFFF" d="M605.88,695.88c0,0,0-41.249-3.427-62.791c-2.815-17.014-26.378-39.535-126.685-76.378
                c-98.716-36.23-92.596-18.604-92.596-85.251c0-43.269,22.032-18.115,36.108-100.246c5.447-32.313,9.854-10.771,21.726-62.607
                c6.243-27.173-4.223-29.192-2.938-42.167c1.225-12.974,2.51-24.541,4.835-51.102C445.658,182.473,415.181,96.12,306,96.12
                s-139.658,86.353-136.66,119.34c2.326,26.377,3.611,38.127,4.835,51.102c1.224,12.974-9.241,14.994-2.938,42.167
                c11.873,51.714,16.218,30.171,21.726,62.607c14.076,82.13,36.108,57.039,36.108,100.246c0,66.83,6.12,49.205-92.596,85.252
                C36.23,593.554,12.485,616.197,9.792,633.211C6.12,654.631,6.12,695.88,6.12,695.88H306H605.88z"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Accounts;
