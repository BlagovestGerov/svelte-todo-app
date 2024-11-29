<script>
  import { createMenuItems } from "$lib/constants/index.js";
  import { todos } from "$lib/stores/todosStore";

  const menuItems = createMenuItems({
    markAllResolved: () =>
      todos.update((todos) =>
        todos.map((todo) => ({ ...todo, completed: true }))
      ),
    markAllUnresolved: () =>
      todos.update((todos) =>
        todos.map((todo) => ({ ...todo, completed: false }))
      ),
    removeAllTodos: () => todos.set([]),
    addTodo: () => {
      const title = prompt("Enter todo title:");
      if (!title) return alert("Title cannot be empty.");
      todos.update((todos) => [
        ...todos,
        { id: Date.now(), title, completed: false },
      ]);
    },
  });
</script>

<div class="mobile-menu-container">
  {#each menuItems as { label, onClick }}
    <button class="menu-item" on:click={onClick}>{label}</button>
  {/each}
</div>

<style>
  .mobile-menu-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  .menu-item {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #6200ea;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .menu-item:hover {
    background-color: #3700b3;
  }
</style>
