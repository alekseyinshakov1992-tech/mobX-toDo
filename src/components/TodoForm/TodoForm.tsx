import {
  useState,
  type ChangeEvent,
  type FC,
  type MouseEventHandler,
} from "react";
import styles from "./TodoForm.module.css";
import todoStore from "../../store/todo.store";

interface ITodoFormProps {
  setIsOpen: (isOpen: boolean) => void;
  editConfig?: {
    id: number,
    title: string,
    description: string
  }
}

const TodoForm: FC<ITodoFormProps> = ({ setIsOpen, editConfig }) => {
  const { addTodo, changeTodo } = todoStore;

  const defaultValues = editConfig ? {title: editConfig.title, description: editConfig.description} : {
    title: "",
    description: "",
  }

  const [formData, setFormData] = useState(defaultValues);

  const cancelButtonHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const formInputHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    console.dir(e.target.name);

    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const saveButtonHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (editConfig) {
      changeTodo(editConfig.id, {title: formData.title, description: formData.description})
    } else {
      addTodo(formData);
    }
    setIsOpen(false)
  };

  return (
    <form className={styles.createForm}>
      <input
        onChange={formInputHandler}
        type="text"
        name="title"
        id=""
        value={formData.title}
      />
      <textarea
        onChange={formInputHandler}
        name="description"
        id=""
        rows={3}
        value={formData.description}
      ></textarea>
      <div className="buttons">
        <button onClick={saveButtonHandler} className="greenButton">
          Save
        </button>
        <button onClick={cancelButtonHandler} className="redButton">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
