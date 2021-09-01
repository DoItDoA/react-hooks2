import React from "react";
import UserContextProvider from "./useContext/context";
import Screen from "./useContext/Screen";
import Lang from "./Hypertranslate/langContext";
import Screen2 from "./Hypertranslate/Screen";
import translations from "./Hypertranslate/translations";
import Screen3 from "./useReducer/Screen";
import Screen4 from "./ToDo/Screen";
import ToDosProvider from "./ToDo/context";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>context 개념</h1>
        <Screen />
        <hr />
      </UserContextProvider>
      <Lang defaultLang="en" translations={translations}>
        <h1>context 응용</h1>
        <h3>클릭시 번역됨</h3>
        <Screen2 />
        <hr />
      </Lang>
      <h1>useReducer 개념</h1>
      <Screen3></Screen3>
      <hr />
      <ToDosProvider>
        <Screen4></Screen4>
      </ToDosProvider>
    </>
  );
}

export default App;
