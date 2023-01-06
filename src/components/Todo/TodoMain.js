import React, { useState } from "react";

import jsonData from "../../data/Todo_Data.json";
import TodoHeader from "./TodoHeader";
import "./Todo.scss";

const TodoMain = () => {
  const [toDoList, setToDoList] = useState(jsonData);
  
  const handleTaskClick = (event) => {
    const markedId = event.target.id;
    let mapped = toDoList.map(task => {
      return task.markedId === Number(markedId) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);

    
  };

  return (
    <div className="main">
      <TodoHeader />
      {jsonData.map((data) => {
        return (
          <div id={data.id} className="task-list" onClick={handleTaskClick}>
            {data.task}
          </div>
        );
      })}
    </div>
  );
};

export default TodoMain;
