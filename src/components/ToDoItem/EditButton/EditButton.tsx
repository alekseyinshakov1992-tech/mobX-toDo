import type { FC } from "react";
import styles from "./EditButton.module.css"

interface IEditButtonProps {
  id: number;
  setEditMode: (isEdit: boolean) => void
}

const EditButton: FC<IEditButtonProps> = ({setEditMode}) => {

  return (
    <button className={"greenButton " + styles.toLeft} onClick={() => {setEditMode(true)}}>
      Edit
    </button>
  );
};

export default EditButton;