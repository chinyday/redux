## Redux

필요한 컴포넌트에서 직접적으로 필요한 정보를 사용할 수 있기 위해서 사용

component : View(app)
store : 정보를 저장하는 공간

component에서 변동이 일어나게 되면 store에 업데이트 시키는 것이 아니라 action, reducer를 통해서 값을 관리한다.

1. component에서 dispatch를 통해서 action을 호출
2. action에 정의 되어 있는 내용이 reducer를 통해서 핸들링
3. 그 핸들링에 따라서 store의 상태값을 업데이트
4. 우리는 업데이트 된 store를 subscribe를 통해서 실시간으로 받아와서 사용
