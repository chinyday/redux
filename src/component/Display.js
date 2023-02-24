import React from 'react';
import { connect } from 'react-redux';

const Display = props => {
  return (
    <div className="items">
      <p>구독자 수 : {props.count}</p>
    </div>
  );
};

const mapStateToProps = ({ subscriber }) => {
  return {
    count: subscriber.count, // props로 count를 전달
  };
};

export default connect(mapStateToProps)(Display);
