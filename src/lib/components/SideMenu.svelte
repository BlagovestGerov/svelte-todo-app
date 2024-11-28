<script>
  import { todos } from '$lib/stores/todosStore';
  import '@material/web/button/outlined-button.js';

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
    const title = prompt('Enter todo title:');
    if (!title) return alert('Title cannot be empty');
    todos.update((current) => [
      ...current,
      { id: Date.now(), title, completed: false, color: null },
    ]);
  }
</script>

<div class="side-menu">
  <md-outlined-button
  onkeydown={(e) => e.key === 'Enter' && markAllResolved()}
    onclick={markAllResolved}
    tabindex="0"
    role="button"
    aria-label="Mark all tasks as resolved"
  >
    Mark All Resolved
  </md-outlined-button>
  <md-outlined-button
  onkeydown={(e) => e.key === 'Enter' && markAllUnresolved()}
    onclick={markAllUnresolved}
    tabindex="0"
    role="button"
    aria-label="Mark all tasks as unresolved"
  >
    Mark All Unresolved
  </md-outlined-button>
  <md-outlined-button
  onkeydown={(e) => e.key === 'Enter' && removeAllTodos()}
    onclick={removeAllTodos}
    tabindex="0"
    role="button"
    aria-label="Remove all tasks"
  >
    Remove All
  </md-outlined-button>
  <md-outlined-button
  onkeydown={(e) => e.key === 'Enter' && addTodo()}
    onclick={addTodo}
    tabindex="0"
    role="button"
    aria-label="Add a new task"
  >
    Add Todo
  </md-outlined-button>
</div>

<style>
  .side-menu md-outlined-button {
    margin: 0.5rem 0;
    display: block;
    width: 100%;
  }
</style>

