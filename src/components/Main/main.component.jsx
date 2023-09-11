import "./main.style.css";
import { useState, useEffect } from "react";
import { Button } from "../Button/buttonWithImg.component";
import { NewTodoForm } from "./TodoList/NewTodo/newTodoForm.component";
import { TodoItem } from "./TodoList/TodoItem/todoItem.component";

export function Main() {
  const [newTodo, setNewTodo] = useState("");
  const [visibilityNewTodoForm, setVisibilityNewTodoForm] = useState(false);

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos === null) return [];
    return JSON.parse(storedTodos); //need parse() to turn string (in local storage) into JS object
  });

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onChangeHandler = (event) => {
    setNewTodo(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newTodo, completed: false },
      ];
    });
    setNewTodo("");
  };

  return (
    <main>
      <div className="todo-overview">
        <div className="todo-count">
          <h2>Todo</h2>
          <p className="count">
            {todos.filter((todo) => !todo.completed).length}
          </p>
        </div>
        <Button
          className="button-icon"
          onClickHandler={() => {
            setVisibilityNewTodoForm(!visibilityNewTodoForm);
          }}
          imgSource="circle_plus_icon.png"
        />
      </div>

      {/* <TodoList /> */}
      <ul className="todo-list">
        {todos.length === 0 && "Feed me with your to-dos!"}

        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />;
        })}
      </ul>

      {/* <NewTodoForm /> */}
      {visibilityNewTodoForm && (
        <NewTodoForm
          onSubmitHandler={onSubmitHandler}
          onChangeHandler={onChangeHandler}
          newTodo={newTodo}
        />
      )}
    </main>
  );
}
