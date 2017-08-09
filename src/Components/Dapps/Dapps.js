import * as React from 'react';
import { Link } from 'react-router-dom';

import './Dapps.css';

class Dapps extends React.Component {
  render() {
    return (
      <div className="Dapps">
        <Link to="/">This is the Dapps block</Link>
      </div>
    );
  }
}

export default Dapps;
