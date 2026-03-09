import { ToDoItem } from "../../components/ToDoItem/ToDoItem";
import styles from "./MainPage.module.css";
import todoStore from "../../store/todo.store"
import { observer } from "mobx-react-lite";
import CreatePanel from "../../components/CreatePanel/CreatePanel";

const MainPage = observer(() => {
  const {todos} = todoStore

  return (
    <div className={styles.wrapper}>
      <CreatePanel />
      
      {todos.map((todo) => {
        return (
          <ToDoItem
            key={todo.id}
            title={todo.title}
            description={todo.description}
            isCompeted={todo.isCompleted}
            id={todo.id}
          />
        );
      })}
    </div>
  );
});

export default MainPage;
