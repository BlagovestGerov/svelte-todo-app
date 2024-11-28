<script>
    import { todos } from '$lib/stores/todosStore';
    import '@material/web/button/outlined-button.js';

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
    <md-outlined-button
      onclick={toggleDone}
      onkeydown={(e) => e.key === 'Enter' && toggleDone()}
      tabindex="0"
      role="button"
      aria-label={todo.completed ? 'Unmark' : 'Mark as Done'}
    >
      {todo.completed ? 'Unmark' : 'Mark as Done'}
    </md-outlined-button>
    <md-outlined-button
      onclick={removeTodo}
      onkeydown={(e) => e.key === 'Enter' && removeTodo()}
      tabindex="0"
      role="button"
      aria-label="Mark all tasks as unresolved"
    >
    Remove
    </md-outlined-button>
  </div>
  