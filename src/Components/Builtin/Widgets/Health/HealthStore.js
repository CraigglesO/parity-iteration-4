// @flow
import { observable } from 'mobx';
import { Api }        from '@parity/parity.js';
import sntp           from 'sntp';
const transport       = new Api.Transport.Http('http://localhost:8545');

type Peers = {
  active:    Array<number>,
  connected: Array<number>,
  max:       Array<number>,
  peers:     Array<number>
}

class HealthStore {
  @observable chain: string = 'chain';
  @observable peers: Peers = {active: 0, connected: 0, max: 0, peers: []};
  @observable timeDiff: number = 0;
  @observable sync: bool = false;

  constructor() {
    this._api   = new Api(transport);
    // this.pubsub = new Pubsub(transport);
    //
    this.getChain();
    this.subscribe();
    this.getSntp();
  }

  getChain() {
    const self = this;

    self._api.parity.chain()
      .then((chain) => {
        self.chain = chain;
      });
  }

  subscribe() {
    const self = this;

    self.getSntp();
    // pubsub.parity.netPeers((err, peers) => {
    //   if (err) return;
    //
    //   this.peers = peers;
    //   this.timeDiff = this.getSntp();
    //   console.log(peers);
    // });
    // Promise.all([
    //
    // ])
    // .then(())
    self._api.parity.getBlockHeaderByNumber()
      .then((block) => {
        this.blockNumber = block.number.toFormat();
      });
    self._api.parity.netPeers()
      .then((peers) => {
        this.peers = peers;
      });
    self._api.eth.syncing()
      .then((sync) => {
        this.sync = sync;
      });
    setTimeout(() => {
      self.subscribe();
    }, 25000);
  }

  getSntp() {
    sntp.time({
        host: 'pool.ntp.org',  // Defaults to pool.ntp.org
        port: 123,              // Defaults to 123 (NTP)
        resolveReference: true, // Default to false (not resolving)
        timeout: 1000           // Defaults to zero (no timeout)
    }, (err, time) => {
      if (err) return null;
      this.timeDiff = time.t;
    }
  )}
}

export default HealthStore;
