// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import AppStore from './AppStore';

/** Components **/
import News from './News/News';

/** Stylesheets **/
import './App.css';

@observer
class App extends React.Component {
  constructor() {
    super();

    this.store = new AppStore();
  }

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <News />
        <div className="app-children">
          {children}
        </div>
      </div>
    );
  }
}

export default App;
