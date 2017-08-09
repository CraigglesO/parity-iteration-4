// @flow
import * as React   from 'react';
import { observer } from 'mobx-react';
import HealthStore  from './HealthStore';

/** Components **/
import CircularProgress from './circularProgress';

/** Stylesheets **/
import './Health.css';

@observer
class Health extends React.Component {
  constructor() {
    super();

    this.store = new HealthStore();
  }
  render() {
    const { chain, peers, timeDiff, sync } = this.store;
    let chainColor = this.getChainColor(chain);
    let percentage = this.getPercentage(sync);
    let peersText = `${peers.active}/${peers.connected}/${peers.max}`;

    return (
      <div className="tile-md Health">
        <div id="node-pulse" />
        <div id="node-health-top">
          <div id="node-health-chain" style={{ backgroundColor: chainColor}}>
            {chain.charAt(0).toUpperCase() + chain.slice(1)}
          </div>
          <div id="node-health-timeDiff">{parseInt(timeDiff)}ms</div>
          <div id="node-health-progress">
            <CircularProgress
              text={peersText}
              percentage={percentage}
            />
          </div>
        </div>
        <div id="node-health-bottom">
          Node Health
        </div>
      </div>
    );
  }

  getChainColor(chain: string) {
    if (chain === 'kovan') return '#4fc1e9';
    if (chain === 'foundation') return '#a0d468';
    return 'white';
  }

  getPercentage(sync: bool | Object) {
    if (!sync) return 100;
    return 50;
  }
}

export default Health;
