import { useState } from "react";
import styles from "./CreatePanel.module.css";
import TodoForm from "../TodoForm/TodoForm";

const CreatePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {!isOpen && (
        <div className={styles.addTodoWrapper}>
          <button className="greenButton" onClick={() => setIsOpen(true)}>New todo</button>
        </div>
      )}

      {isOpen && <TodoForm setIsOpen={setIsOpen} />}
    </div>
  );
};

export default CreatePanel;
