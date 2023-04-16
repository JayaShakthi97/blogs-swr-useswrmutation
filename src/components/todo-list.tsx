// react functional component with typescript to render the todo list
import { TodoItem } from "./todo-list-item";
import { Todo } from "../models/todo";

type TodoListProps = {
  todos: Todo[] | undefined;
  isLoading?: boolean;
  hasError?: boolean;
  onTodoClick: (todo: Todo) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  isLoading,
  hasError,
  onTodoClick,
}) => {
  return (
    <div style={{ padding: 8 }}>
      <h4>Todo List</h4>
      {isLoading && <div>Loading...</div>}
      {hasError && <div>Error loading todos</div>}
      <ul>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onClick={onTodoClick} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
