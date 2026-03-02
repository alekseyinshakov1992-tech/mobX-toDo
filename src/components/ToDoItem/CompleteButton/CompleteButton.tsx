import type { FC } from "react";
import styles from "./CompleteButton.module.css";
import todoStore from "../../../store/todo.store";

interface ICompleteButtonProps {
  id: number;
}

const CompleteButton: FC<ICompleteButtonProps> = ({ id }) => {
  const { makeComplete } = todoStore;

  return (
    <button className={styles.completeBtn} onClick={() => makeComplete(id)}>
      Complete
    </button>
  );
};

export default CompleteButton;
