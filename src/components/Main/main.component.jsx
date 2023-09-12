import "./main.style.css";
import { useState, useEffect } from "react";
import { Button } from "../Button/buttonWithImg.component";
import { NewTodoForm } from "./TodoList/NewTodo/newTodoForm.component";
import { TodoItem } from "./TodoList/TodoItem/todoItem.component";

export function Main() {
  //useState for the list of todos. Initial state is saved todos from localstorage or empty array if nothing there:
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos === null) return [];

    return JSON.parse(storedTodos); //turn string (in local storage) into JS object
  });

  //useState for todoItem which is focused (to display the delete icon)
  const [focusedTodoId, setFocusedTodoId] = useState(null);

  //useState for current text input value in newTodoForm:
  const [newTodo, setNewTodo] = useState("");

  //useState for show or hide input field to add newTodo (when user click + button)
  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onChangeInputHandler = (event) => {
    setNewTodo(event.target.value);
  };

  const addNewTodoHandler = (event) => {
    event.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newTodo, completed: false },
      ];
    }); //randomUUID(): generate random string 36-character long
    setNewTodo(""); //make it blank
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
          onClickHandler={() => {
            setShowNewTodoForm(!showNewTodoForm);
          }}
          imgSource="circle_plus_icon.png"
        />
      </div>

      {/* TodoList: shows todoItem */}
      <ul className="todo-list">
        {todos.length === 0 ? "Feed me with your to-dos!" : null}

        {todos.map((todo) => {
          const isFocused = todo.id === focusedTodoId;

          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              isFocused={isFocused}
              setFocusedTodoId={setFocusedTodoId}
            />
          );
        })}
      </ul>

      {/* NewTodoForm "pop  up" at the end of Todo list */}
      {showNewTodoForm ? (
        <NewTodoForm
          onSubmitHandler={addNewTodoHandler}
          onChangeHandler={onChangeInputHandler}
          newTodo={newTodo}
        />
      ) : null}
    </main>
  );
}
