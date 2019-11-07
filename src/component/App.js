import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";

import { Text } from "./Text";
import { TodoInput } from "./TodoInput";
// import { Icon} from './Icon'
import { TodoItem } from "./TodoListItem";

function App() {
  const [todoArr, setTodoArr] = useState([]);

  const onAdd = text =>
    setTodoArr([
      ...todoArr,
      {
        _id: uuid(),
        text,
        complited: false
      }
    ]);
  const onSwitch = id => {
    const newArr = todoArr.map(todo =>
      todo.id === id ? { ...todo, complited: !todo.complited } : todo
    );
    setTodoArr([...todoArr, ...newArr]);
  };

  useEffect(() => {
    console.log(todoArr)
  }, [todoArr])
  return (
    <div className="aplication">
      <Text size="45px">Test ToDo React Apliko</Text>
      <TodoInput onAdd={onAdd} />
      <div className="todoList">
        {todoArr.map(todo => (
          <TodoItem key={todo._id} todo={todo} onSwitch={onSwitch} />
        ))}
      </div>
    </div>
  );
}

export default App;
