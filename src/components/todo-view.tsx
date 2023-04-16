// react component to view a single todo item

import React from "react";
import { Todo } from "../models/todo";
import {
  deleteTodo,
  getTodo,
  patchTodo,
  usePatchTodo,
  useGetTodo,
} from "../api/todo-api";

type TodoViewProps = {
  selectedTodoId?: number;
};

const TodoView: React.FC<TodoViewProps> = ({ selectedTodoId }) => {
  // const [todo, setTodo] = React.useState<Todo>();

  const {
    data: todo,
    error: getTodoError,
    isLoading: isGetTodoLoading,
    trigger: getTodo,
  } = useGetTodo();

  const {
    data: updatedTodo,
    trigger: updateTodo,
    error: updatingError,
    isMutating: isUpdating,
  } = usePatchTodo();

  React.useEffect(() => {
    if (!selectedTodoId) {
      return;
    }

    getTodo({
      id: selectedTodoId,
    });
  }, [selectedTodoId, getTodo]);

  const onUpdated = (todo: Todo) => {
    updateTodo({
      requestData: { completed: todo.completed },
      queryParams: {
        id: todo.id,
      },
    });
  };

  const onDeleted = (todo: Todo) => {
    // deleteTodo(todo.id)
    //   .then(() => setTodo(undefined))
    //   .catch((err) => console.error(err));
  };

  return (
    <div>
      <h4>Todo View</h4>
      {selectedTodoId && isGetTodoLoading && <span>Loading...</span>}
      {selectedTodoId && getTodoError && (
        <span>Error: {getTodoError.message}</span>
      )}
      {!selectedTodoId && (
        <div>
          <p>No todo selected</p>
        </div>
      )}
      {!isGetTodoLoading && todo && (
        <div>
          <h3>{todo.title}</h3>
          <div style={{ marginBottom: 8 }}>
            {`Status: ${todo.completed ? "Completed" : "Pending"}`}
          </div>
          <button
            onClick={() => onUpdated({ ...todo, completed: !todo.completed })}
          >
            Toggle
          </button>
          <button onClick={() => onDeleted(todo)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoView;
