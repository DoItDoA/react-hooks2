import React from "react";
import { useFns } from "./context";
import Header from "./Header";

const Screen = () => {
  const { logUserIn } = useFns();
  return (
    <div>
      <Header />
      <h3>클릭시 로그인 글이 바뀜</h3>
      <button onClick={logUserIn}>Log user in</button>
    </div>
  );
};

export default Screen;
