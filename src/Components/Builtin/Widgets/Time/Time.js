import * as React  from 'react';

/** Stylesheets **/
import './Time.css';

class Time extends React.Component {
  constructor() {
    super();
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
      day: 0
    };
  }

  getTime() {
    const newDate = new Date();

    this.setState({
      second: newDate.getSeconds(),
      minute: newDate.getMinutes(),
      hour:   newDate.getHours(),
      day:    newDate.getDate()
    });
  }

  componentDidMount() {
    this.getTime();
    this.timeInterval = setInterval(() => {
      this.getTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    const { second, minute, hour, day } = this.state;

    let angleSecond = (second * 60) / 10;
    let angleMinute = minute * 6;
    let angleHour   = (hour / 12) * 360;
    return (
      <div className="tile-sm Time">
        <div className="c-clock">
          <div id="c-clock-center" />
          <div id="c-clock-day" />
          <div id="c-clock-day-time">{day}</div>
          <div id="c-clock-hour" style={{ transform: `translate(-50%, -100%) rotate(${angleHour}deg)`}}/>
          <div id="c-clock-minute" style={{ transform: `translate(-50%, -100%) rotate(${angleMinute}deg)`}}/>
          <div id="c-clock-second" style={{ transform: `translate(-50%, -100%) rotate(${angleSecond}deg)`}}/>
        </div>
      </div>
    );
  }
}

export default Time;
