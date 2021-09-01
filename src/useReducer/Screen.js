import React, { useReducer } from "react";

const INCREMENT = "increment";
const DECREMENT = "decrement";

// useReducer는 Redux와 비슷하다
const reducer = (state, action) => {
  // action은 기본적으로 type객체를 가진다
  switch (action) {
    case INCREMENT:
      return { count: state.count + 1 }; // return값은 state에 저장된다
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

function Screen() {
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // 첫번째 인자는 실행 함수, 두번째 인자는 초기 state값
  return (
    <>
      {/* state는 reducer의 return을 통해서 값을 가진다 */}
      <h1>{state.count}</h1>
      {/* dispatch 실행시 reducer의 action에 값을 넣어 리턴값 가져온다 */}
      <button onClick={() => dispatch(INCREMENT)}>Add</button>
      <button onClick={() => dispatch(DECREMENT)}>Remove</button>
    </>
  );
}
export default Screen;
