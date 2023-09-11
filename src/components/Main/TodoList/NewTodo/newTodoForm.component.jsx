export function NewTodoForm({ onSubmitHandler, onChangeHandler, newTodo }) {
  return (
    <form onSubmit={onSubmitHandler} className="newTodo-form">
      <input
        onChange={onChangeHandler}
        value={newTodo}
        type="text"
        id="newTodo"
        placeholder="What's on your mind, taskmaster?"
      />
    </form>
  );
}
