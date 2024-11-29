<script>
  import { todos } from "$lib/stores/todosStore";
  import "@material/web/button/outlined-button.js";
  import { createMenuItems } from "$lib/constants/index.js";

  function markAllResolved() {
    todos.update((current) =>
      current.map((todo) => ({ ...todo, completed: true }))
    );
  }

  function markAllUnresolved() {
    todos.update((current) =>
      current.map((todo) => ({ ...todo, completed: false }))
    );
  }

  function removeAllTodos() {
    todos.set([]);
  }

  function addTodo() {
    const title = prompt("Enter todo title:");
    if (!title) return alert("Title cannot be empty");
    todos.update((current) => [
      ...current,
      { id: Date.now(), title, completed: false, color: null },
    ]);
  }

  const menuItems = createMenuItems({
    markAllResolved,
    markAllUnresolved,
    removeAllTodos,
    addTodo,
  });
</script>

<div class="side-menu">
  {#each menuItems as { label, ariaLabel, onClick }}
    <md-outlined-button
      onkeydown={(e) => e.key === "Enter" && onClick()}
      onclick={onClick}
      tabindex="0"
      role="button"
      aria-label={ariaLabel}
    >
      {label}
    </md-outlined-button>
  {/each}
</div>

<style>
  .side-menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .side-menu md-outlined-button {
    width: 100%;
  }
</style>
