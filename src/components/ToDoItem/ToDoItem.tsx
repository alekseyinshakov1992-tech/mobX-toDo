import { useState, type FC } from "react";
import styles from "./ToDoItem.module.css";
import doneIcon from "./icons/checked.png";
import pendingIcon from "./icons/clocks.png";
import DeleteButton from "./DeleteButton/DeleteButton";
import CompleteButton from "./CompleteButton/CompleteButton";
import IncompleteButton from "./IncomlpleteButton/IncompleteButton";
import EditButton from "./EditButton/EditButton";
import TodoForm from "../TodoForm/TodoForm";

interface ItoDoItemProps {
  title: string;
  description: string;
  isCompeted: boolean;
  id: number;
}

export const ToDoItem: FC<ItoDoItemProps> = ({
  title,
  description,
  isCompeted,
  id,
}) => {

  const [editMode, setEditMode] = useState(false)

  if(editMode) {
    return <TodoForm setIsOpen={setEditMode} editConfig={{id, title, description}} />
  }

  return (
    <div
      className={`${styles.wrapper} ${isCompeted ? styles.completedBG : ""}`}
    >
      <div className={styles.titleWrapper}>
        <img
          className={styles.todoIcon}
          src={isCompeted ? doneIcon : pendingIcon}
          alt="status icon"
        />
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.description}>{description}</div>

      <div className={styles.buttonsWrapper}>
        {isCompeted ? <IncompleteButton id={id} /> : <CompleteButton id={id} />}
        <div>
          <EditButton id={id} setEditMode={setEditMode}/>
          <DeleteButton id={id} />
        </div>
      </div>
    </div>
  );
};
