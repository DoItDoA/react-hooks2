import React, { useState, useContext } from "react";

const UserContext = React.createContext(); // Context 생성 후 Provider의 자식요소에서 useContext사용하여 UserContext호출 시 value값 가져올 수 있다

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Nico",
    loggedIn: false,
  });

  const logUserIn = () => setUser({ ...user, loggedIn: true });
  return (
    <>
      {/*자식요소에게 value값 전송 */}
      <UserContext.Provider value={{ user, fn: { logUserIn } }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext); // useContext사용하여 UserContext호출하여 value값 추출
  return user;
}; // 반드시 함수명을 use로 시작해야한다. 안하면 오류남

export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

export default UserContextProvider;
