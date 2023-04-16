// react functional component with typescript to render the todo item
// edit, delete, and toggle complete actions are passed in as props
import React from "react";
import { Todo } from "../models/todo";

type TodoItemProps = {
  todo: Todo;
  onClick: (todo: Todo) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onClick }) => {
  return (
    <li>
      <div style={{ padding: 4 }}>
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : undefined,
          }}
        >
          {todo.title}
        </span>
        <button style={{ marginLeft: 4 }} onClick={() => onClick(todo)}>
          View
        </button>
      </div>
    </li>
  );
};
