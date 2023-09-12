/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import "./todoItem.style.css";

import { Button } from "../../../Button/buttonWithImg.component";

export function TodoItem({ todo, setTodos, isFocused, setFocusedTodoId }) {
  /* const [focused, setFocused] = useState(false); */

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

  //somehow onBlur doesn't work properly anymore (previously focused item remains focused even after a new item has been focused) so this alternative
  /* const focusHandler = () => {
    setFocused(!focused);

    //get the item that the "focused" class will be removed from
    const targetItem = document.querySelector(".focused");
    if (targetItem) {
      targetItem.classList.remove("focused");
    }
  }; */

  //show the filtered list of todo which not contain the deleted item
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

      {isFocused && (
        <Button
          onClickHandler={() => {
            deleteTodo(todo.id);
          }}
          imgSource="trash_icon.png"
        />
      )}
    </li>
  );
}
