import { action, makeObservable, observable } from "mobx";

class toDoStore {
  todos = [
    {
      title: "Изучить mobX",
      description:
        "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      isCompleted: false,
      id: 1,
    },
    {
      title: "Изучить context",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      isCompleted: true,
      id: 2,
    },
  ];

  constructor() {
    makeObservable(this, {
      todos: observable,
      makeComplete: action,
      deleteTodo: action
    });
  }

  makeComplete = (id: number) => {
    const todo = this.todos.find((item) => item.id === id);
    if (!todo) return;

    todo.isCompleted = true;
  }

  makeIncomplete = (id: number) => {
    const todo = this.todos.find((item) => item.id === id);
    if (!todo) return;

    todo.isCompleted = false;
  }

  deleteTodo = (id: number) => {
   this.todos = this.todos.filter(item => item.id !== id)
  }
}

export default new toDoStore();
