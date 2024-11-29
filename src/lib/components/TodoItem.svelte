<script>
  import { todos } from "$lib/stores/todosStore";
  import ColorPicker from "$lib/components/ColorPicker.svelte";
  import "@material/web/button/outlined-button.js";

  export let todo;
  let isColorPickerOpen = false;
  let selectedTodoId = null;

  function handleColorChange(color) {
    todos.update((current) =>
      current.map((t) => (t.id === selectedTodoId ? { ...t, color } : t))
    );
    closeColorPicker();
  }

  function openColorPicker(todoId) {
    selectedTodoId = todoId;
    isColorPickerOpen = true;
  }

  function closeColorPicker() {
    isColorPickerOpen = false;
  }

  function toggleDone() {
    todos.update((current) =>
      current.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function removeTodo() {
    todos.update((current) => current.filter((t) => t.id !== todo.id));
  }
</script>

<div
  class="todo-item"
  style="border-left: 5px solid {todo.color || 'var(--primary-color)'}"
>
  <div class="todo-title">
    <h3>{todo.title}</h3>
  </div>
  <md-outlined-button
    onkeydown={(e) => e.key === "Enter" && openColorPicker(todo.id)}
    onclick={() => openColorPicker(todo.id)}
    tabindex="0"
    role="button"
    aria-label="Pick a color"
  >
    Pick Color
  </md-outlined-button>
  {#if isColorPickerOpen}
    <ColorPicker
      onSelect={handleColorChange}
      isOpen={isColorPickerOpen}
      todoId={selectedTodoId}
      onClose={closeColorPicker}
    />
  {/if}
  <md-outlined-button
    onclick={toggleDone}
    onkeydown={(e) => e.key === "Enter" && toggleDone()}
    tabindex="0"
    role="button"
    aria-label={todo.completed ? "Unmark" : "Mark as Done"}
  >
    {todo.completed ? "Unmark" : "Mark as Done"}
  </md-outlined-button>
  <md-outlined-button
    onclick={removeTodo}
    onkeydown={(e) => e.key === "Enter" && removeTodo()}
    tabindex="0"
    role="button"
    aria-label="Mark all tasks as unresolved"
  >
    Remove
  </md-outlined-button>
</div>

<style>
  .todo-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    border: 1px solid var(--border-color);
    border-left: 5px solid var(--todo-color, var(--primary-color));
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: var(--background-color);
    box-shadow: 0 2px 5px var(--shadow-color);
    transition: box-shadow 0.3s ease;
  }

  .todo-item:hover {
    box-shadow: 0 4px 10px var(--shadow-hover-color);
  }

  .todo-title {
    flex: 1;
  }

  .todo-item h3 {
    margin: 0 0 10px;
    font-size: 1.2rem;
    color: var(--primary-color);
  }

  .todo-item md-outlined-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 8px;
    color: var(--secondary-color);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .todo-title {
    font-size: 1rem;
    font-weight: bold;
    color: #333333;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    .todo-item {
      flex-direction: column;
      align-items: flex-start;
    }

    .todo-title {
      margin-bottom: 0.5rem;
    }

    .todo-item md-outlined-button {
      width: 100%;
      font-size: 0.8rem;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .todo-item md-outlined-button:last-child {
      margin-bottom: 0;
    }
  }
</style>
