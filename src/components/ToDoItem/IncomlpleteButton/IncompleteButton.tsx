import type { FC } from "react";
import styles from "./IncompleteButton.module.css";

import todoStore from "../../../store/todo.store";

interface IIncompleteButtonStore {
  id: number;
}

const IncompleteButton: FC<IIncompleteButtonStore> = ({ id }) => {
  const { makeIncomplete } = todoStore;
  return (
    <button
      className={styles.incompleteButton}
      onClick={() => makeIncomplete(id)}
    >
      Incomplete
    </button>
  );
};

export default IncompleteButton;
