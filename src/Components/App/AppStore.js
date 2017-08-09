// @flow
import { observable } from 'mobx';
// import { Api } from '@parity/parity.js';
// const transport = new Api.Transport.Http('http://localhost:8545');

class AppStore {
  @observable x = [];

  constructor() {
  }
}

export default AppStore;
