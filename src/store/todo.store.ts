import { action, computed, makeObservable, observable, toJS } from "mobx";

type Todo = {
  isCompleted: boolean;
  id: number;
  title: string;
  description: string;
  date: string;
};
type todoData = { title: string; description: string; date: string };
class toDoStore {
  todos: Todo[] = [];

  searchValue = "";

  constructor() {
    makeObservable(this, {
      todos: observable,
      searchValue: observable,
      makeComplete: action,
      makeIncomplete: action,
      deleteTodo: action,
      addTodo: action,
      changeTodo: action,
      setTodosFromLS: action,
      setSearchValue: action,
      filteredTodos: computed,
      statistic: computed
    });
  }

  makeComplete = (id: number) => {
    const todo = this.todos.find((item) => item.id === id);
    if (!todo) return;

    todo.isCompleted = true;
  };

  makeIncomplete = (id: number) => {
    const todo = this.todos.find((item) => item.id === id);
    if (!todo) return;

    todo.isCompleted = false;
  };

  deleteTodo = (id: number) => {
    this.todos = this.todos.filter((item) => item.id !== id);
    this.saveTodosToLS();
  };

  addTodo = (todoData: todoData) => {
    let lastId = 0;

    if (this.todos.length) {
      lastId = Math.max(...this.todos.map((item) => item.id));
    }

    this.todos = [
      { id: lastId + 1, isCompleted: false, ...todoData },
      ...this.todos,
    ];
    this.saveTodosToLS();
  };

  changeTodo = (id: number, todoData: todoData) => {
    const targetTodo = this.todos.find((todo) => todo.id === id);

    if (targetTodo) {
      targetTodo.description = todoData.description;
      targetTodo.title = todoData.title;
    }
    this.saveTodosToLS();
  };

  setTodosFromLS = () => {
    const localStorageStringTodos = localStorage.getItem("my_todos");
    if (localStorageStringTodos) {
      this.todos = JSON.parse(localStorageStringTodos);
    }
  };

  saveTodosToLS = () => {
    const data = JSON.stringify(toJS(this.todos));
    localStorage.setItem("my_todos", data);
  };

  setSearchValue = (value: string) => {
    this.searchValue = value
  }

  get filteredTodos() {
    const search = this.searchValue.toLowerCase();
    return this.todos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(search) ||
        todo.description.toLowerCase().includes(search),
    );
  }

  get statistic() {
    const completed = this.todos.filter(todo => todo.isCompleted).length
    const inCompleted = this.todos.filter(todo => !todo.isCompleted).length
    return {
      completed,
      inCompleted,
      all: this.todos.length
    }
  }
}

export default new toDoStore();
