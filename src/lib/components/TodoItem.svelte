<script>
    import { todos } from '$lib/stores/todosStore';
  
    export let todo;
  
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
    <button on:click={toggleDone}>
      {todo.completed ? 'Unmark' : 'Mark as Done'}
    </button>
    <button on:click={removeTodo}>Remove</button>
  </div>
  