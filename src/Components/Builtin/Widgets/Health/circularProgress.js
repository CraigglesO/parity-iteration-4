import React from 'react';

export default class CircularProgress extends React.Component {
  render() {
    const radius = 64;
    const width = radius * 2;
    const height = radius * 2;
    const viewBox = `0 0 ${width+10} ${height+10}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;

    return (
      <svg
        className="CircularProgress"
        width={radius * 2}
        height={radius * 2}
        viewBox={viewBox}>
        <circle
          className="CircularProgress-Bg"
          cx={radius+5}
          cy={radius+5}
          r={radius}
          strokeWidth={"4"} />
        <circle
          className="CircularProgress-Fg"
          cx={radius+5}
          cy={radius+5}
          r={radius}
          strokeWidth={"8"}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }} />
        <text
          className="CircularProgress-Text"
          x={radius+5}
          y={radius+5}
          dy=".4em"
          textAnchor="middle">
          {`${this.props.text}`}
        </text>
      </svg>
    );
  }
}

CircularProgress.defaultProps = {
    percentage: 50,
    text: '0/8/25'
};
