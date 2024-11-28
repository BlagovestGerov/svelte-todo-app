<script>
  import { todos } from "$lib/stores/todosStore";
  import ColorPicker from "$lib/components/ColorPicker.svelte";
  import "@material/web/button/outlined-button.js";

  export let todo;
  let isColorPickerOpen = false;
  let selectedTodoId = null;

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

<div class="todo-item" style="border-left: 5px solid {todo.color || 'gray'}">
  <h3>{todo.title}</h3>
  <md-outlined-button
    onkeydown={(e) => e.key === "Enter" && openColorPicker(todo.id)}
    onclick={() => openColorPicker(todo.id)}
    tabindex="0"
    role="button"
    aria-label="Pick a color"
  >
    Pick Color
  </md-outlined-button>
  <ColorPicker
    isOpen={isColorPickerOpen}
    todoId={todo.id}
    onClose={closeColorPicker}
  />
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
