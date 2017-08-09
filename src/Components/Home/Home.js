import * as React from 'react';
import Masonry    from 'react-masonry-infinite';
// import { Link } from 'react-router-dom';

/** Components **/
import Accounts       from '../Builtin/Widgets/Accounts/Accounts';
import RecentActivity from '../Builtin/Widgets/RecentActivity/RecentActivity';
import Health         from '../Builtin/Widgets/Health/Health';
import Time           from '../Builtin/Widgets/Time/Time';

/** Stylesheets **/
import './Home.css';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      hasMore: false,
      elements: this.generateElements(),
    };
  }

  generateElements = () => {
    return [
      <Time />,
      <Health />,
      <Accounts />,
      <RecentActivity />
    ];
  }

  loadMore = () => {
    return [];
  }

  render() {
    return (
      <div className="Home">
        <Masonry
          hasMore={this.state.hasMore}
          loadMore={this.loadMore}
          sizes={
            [
              { columns: 2, gutter: 23 },
              { mq: '675px', columns: 3, gutter: 23 },
              { mq: '900px', columns: 4, gutter: 23 }
            ]
          }
        >
          {
            this.state.elements.map((el, i) => <div key={i}>{el}</div>)
          }
        </Masonry>
      </div>
    );
  }
}

export default Home;
