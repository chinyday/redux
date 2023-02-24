import React from 'react';
import { connect } from 'react-redux';
import { addView } from '../redux/index';

const View = props => {
  const { count, addView } = props;
  return (
    <div className="items">
      <h3>조회 수 : {count}</h3>
      <button onClick={() => addView()}>조회추가</button>
    </div>
  );
};

const mapStateToProps = ({ views }) => {
  return {
    count: views.count, // props로 count를 전달
  };
};

const mapDispatchToProps = {
  addView,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);

//mapStateToProps를 connect의 인자로 넘여주면 리덕스와 연결이 된다.
