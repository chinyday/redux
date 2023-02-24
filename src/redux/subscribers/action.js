import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from './types';

/*

addSubscriber 라는 액션을 만들고(정의하고)
객체를 리턴을 하는데 그 안에 type을 정의한다. 

*/

//type이 ADD_SUBSCRIBER를 가진 오브젝트를 반환해주는 action(addSubscriber)
export const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER, // 어떤 역할을 하는 지 값을 보내준다
  };
};

export const removeSubscriber = () => {
  return {
    type: REMOVE_SUBSCRIBER,
  };
};
