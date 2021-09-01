import React from "react";
import Add from "./Add";
import List from "./List";
import { useState } from "./context";
import ToDo from "./ToDo";

function Screen() {
  const { toDos, completed } = useState();
  return (
    <>
      {/* 입력 */}
      <Add />
      {/* 할일 목록 */}
      <List name={"To Dos"}>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>
      {/* 완료 목록 */}
      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map((toDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
}

export default Screen;
