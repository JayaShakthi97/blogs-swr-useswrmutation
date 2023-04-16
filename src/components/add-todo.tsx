// react component to add a todo
import React from "react";
import { usePostTodo } from "../api/todo-api";

type AddTodoProps = {
  onAdded: () => void;
};

const AddTodo: React.FC<AddTodoProps> = ({ onAdded }) => {
  const [title, setTitle] = React.useState<string>("");

  const { trigger: addTodo, isMutating: isAddTodoLoading } = usePostTodo();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onAddClick = () => {
    addTodo({
      requestData: {
        title,
        completed: false,
      },
    })
      .then((_) => {
        setTitle("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: 8 }}>
      <h4>Add Todo</h4>
      {isAddTodoLoading && <div>Adding TODO...</div>}
      <input type="text" value={title} onChange={onTitleChange} />
      <button onClick={onAddClick}>Add</button>
    </div>
  );
};

export default AddTodo;
