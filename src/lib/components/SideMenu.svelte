<script>
  import AddTodoModal from "./AddTodoModal.svelte";
  import { createMenuItems } from "$lib/constants/helperConstants.js";
  import { todos } from "$lib/stores/todosStore";
  import { onMount } from "svelte";

  let isDialogOpen = false;
  let pageLoaded = false;

  onMount(() => {
    pageLoaded = true;
  });

  function addTodoCallback(newTodoTitle) {
    todos.update((currentTodos) => [
      { id: Date.now(), title: newTodoTitle, completed: false },
      ...currentTodos,
    ]);
  }

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
      isDialogOpen = true;
    },
  });

  function closeModal() {
    isDialogOpen = false;
  }
</script>

<div class="menu-container">
  {#each menuItems as { label, ariaLabel, onClick }}
    <button class="menu-item" onclick={onClick} aria-label={ariaLabel}>
      {label}
    </button>
  {/each}
</div>

{#if pageLoaded}
  <AddTodoModal
    isOpen={isDialogOpen}
    onClose={closeModal}
    onAddTodo={addTodoCallback}
  />
{/if}

<style>
  .menu-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .menu-item {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .menu-item:hover {
    background-color: var(--primary-hover-color);
  }
</style>
