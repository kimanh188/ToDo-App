import "./main.style.css";
import { useState, useEffect } from "react";
import { Button } from "../Button/buttonWithImg.component";
import { NewTodoForm } from "./TodoList/NewTodo/newTodoForm.component";
import { TodoItem } from "./TodoList/TodoItem/todoItem.component";

export function Main() {
  //for the list of todos already have in app:
  const [todos, setTodos] = useState(() => {
    //"get" the saved todos from localstorage or if nothing there then return empty array
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos === null) return [];

    return JSON.parse(storedTodos); //need parse() to turn string (in local storage) into JS object
  });

  //for todoItem which is focused (to display the delete icon)
  const [focusedTodoId, setFocusedTodoId] = useState(null);

  //for current text input value in newTodoForm:
  const [newTodo, setNewTodo] = useState("");

  //for show or hide input field to add newTodo (when user click + button)
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
        {/* null (not empty string) because nothing should be rendered if condition false */}

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
