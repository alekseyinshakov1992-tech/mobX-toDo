import styles from "./DeleteButton.module.css";
import todoStore from "../../../store/todo.store";
import type { FC } from "react";

interface IDeleteButtonProps {
  id: number;
}

const DeleteButton: FC<IDeleteButtonProps> = ({id}) => {
  const { deleteTodo } = todoStore;

  return (
    <button
      className={styles.deleteBtn}
      onClick={() => {
        deleteTodo(id);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
