// react functional component with typescript to render the todo list
import React from "react";
import { Todo } from "../models/todo";
import { getTodos, useGetTodos } from "../api/todo-api";
import TodoList from "../components/todo-list";
import TodoView from "../components/todo-view";
import AddTodo from "../components/add-todo";

const TodoListPage: React.FC = () => {
  // const [todos, setTodos] = React.useState<Todo[]>();
  const [selectedTodoId, setSelectedTodoId] = React.useState<number>();

  const {
    data: todoList,
    error: getTodoListError,
    isLoading: isGetTodoLoading,
  } = useGetTodos();

  //   const fetchTodos = () => {
  //     getTodos()
  //       .then((todos) => setTodos(todos))
  //       .catch((err) => console.error(err));
  //   };

  //   React.useEffect(() => {
  //     fetchTodos();
  //   }, []);

  const onAdded = () => {
    // fetchTodos();
    console.log("onAdded");
  };

  const onTodoClick = (todo: Todo) => {
    setSelectedTodoId(todo.id);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <AddTodo onAdded={onAdded} />
        <TodoList
          todos={todoList}
          isLoading={isGetTodoLoading}
          hasError={getTodoListError !== undefined}
          onTodoClick={onTodoClick}
        />
      </div>
      <div style={{ flex: 1 }}>
        <TodoView selectedTodoId={selectedTodoId} />
      </div>
    </div>
  );
};

export default TodoListPage;
