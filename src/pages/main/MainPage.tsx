import { ToDoItem } from "../../components/ToDoItem/ToDoItem";
import styles from "./MainPage.module.css"

const MainPage = () => {
  const todos = [
    {
      title: "Приготовить еду",
      description:
        "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {title: "Сходить на прогулку",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."},
  ];

  return (
    <div className={styles.wrapper}>
      {todos.map(() => {
        return <ToDoItem />
      })}

      
    </div>
  );
};

export default MainPage;
