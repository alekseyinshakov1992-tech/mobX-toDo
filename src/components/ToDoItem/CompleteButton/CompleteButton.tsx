import type { FC } from "react";
import todoStore from "../../../store/todo.store";

interface ICompleteButtonProps {
  id: number;
}

const CompleteButton: FC<ICompleteButtonProps> = ({ id }) => {
  const { makeComplete } = todoStore;

  return (
    <button className="greenButton" onClick={() => makeComplete(id)}>
      Complete
    </button>
  );
};

export default CompleteButton;
