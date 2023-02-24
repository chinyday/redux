import React from 'react';
import { connect } from 'react-redux';
import { addSubscriber, removeSubscriber } from '../redux/index';

const Subscribers = props => {
  const { count, addSubscriber } = props;

  return (
    <div className="items">
      <h3>구독자 수 : {count}</h3>
      <button onClick={() => addSubscriber()}>구독하기</button>
      <button onClick={() => removeSubscriber()}>구독취소하기</button>
    </div>
  );
};

const mapStateToProps = ({ subscriber }) => {
  return {
    count: subscriber.count, // props로 count를 전달
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()), // props로 사용할 메서드를 작성한다.
//   };
// };

const mapDispatchToProps = {
  addSubscriber, // addSubscriber (포로퍼디): addSubscriber (함수) => 바로 맵핑
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);

//mapStateToProps를 connect의 인자로 넘여주면 리덕스와 연결이 된다.
