/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";
import { Button } from "../../../Button/buttonWithImg.component";

export function TodoItem({ todo, setTodos }) {
  const [focusedTodoId, setFocusedTodoId] = useState(null);

  const isFocused = todo.id === focusedTodoId;

  const checkToggleHandler = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li
      className={`todo-item ${isFocused ? "focused" : ""}`}
      onClick={() => setFocusedTodoId(todo.id)}
      onBlur={() => setFocusedTodoId(null)}
    >
      <label>
        <input
          onChange={(event) => {
            checkToggleHandler(todo.id, event.target.checked);
          }}
          type="checkbox"
          checked={todo.completed}
        />

        <span className={todo.completed ? "completed-text" : ""}>
          {todo.title}
        </span>
      </label>

      {isFocused && (
        <Button
          className="button-icon"
          onClickHandler={() => {
            deleteTodo(todo.id);
          }}
          imgSource="trash_icon.png"
        />
      )}
    </li>
  );
}
