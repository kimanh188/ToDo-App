/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import "./todoItem.style.css";

import { Button } from "../../../Button/buttonWithImg.component";

export function TodoItem({ todo, setTodos, isFocused, setFocusedTodoId }) {
  const checkToggleHandler = (id, completed) => {
    //iterate over todos: if id of a todo === id in argument -> update completed, otherwise leave the todo unchanged.
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
      key={todo.id}
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

      {isFocused ? (
        <Button
          onClickHandler={() => {
            deleteTodo(todo.id);
          }}
          imgSource="trash_icon.png"
        />
      ) : null}
    </li>
  );
}
