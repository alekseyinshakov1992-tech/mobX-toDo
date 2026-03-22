import { ToDoItem } from "../../components/ToDoItem/ToDoItem";
import styles from "./MainPage.module.css";
import todoStore from "../../store/todo.store";
import { observer } from "mobx-react-lite";
import CreatePanel from "../../components/CreatePanel/CreatePanel";
import { useEffect, type ChangeEventHandler } from "react";
import { ThemeSwitcher } from "../../components/ThemeSwicher/ThemeSwicher";

const MainPage = observer(() => {
  const { filteredTodos, setTodosFromLS, searchValue, setSearchValue, statistic } =
    todoStore;

  useEffect(() => {
    setTodosFromLS();
  }, [setTodosFromLS]);

  const onSearchInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <CreatePanel />
      <div className={styles.searchPanel}>
        <input
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={onSearchInputChange}
        />
        <div className={styles.status}>
          Completed: {statistic.completed} / {statistic.all}
        </div>
        <ThemeSwitcher />
      </div>

      {filteredTodos.map((todo) => {
        return <ToDoItem {...todo} />;
      })}
    </div>
  );
});

export default MainPage;
