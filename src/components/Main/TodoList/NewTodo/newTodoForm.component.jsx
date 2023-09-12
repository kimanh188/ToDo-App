import "./newTodoForm.style.css";

export function NewTodoForm({ onSubmitHandler, onChangeHandler, newTodo }) {
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        onChange={onChangeHandler}
        value={newTodo}
        type="text"
        id="newTodo"
        name="newTodo"
        placeholder="What's on your mind, taskmaster?"
      />
    </form>
  );
}
