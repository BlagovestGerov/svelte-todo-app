<script>
    import { todos } from '$lib/stores/todosStore';
  
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
    <button on:click={markAllResolved}>Mark All Resolved</button>
    <button on:click={markAllUnresolved}>Mark All Unresolved</button>
    <button on:click={removeAllTodos}>Remove All</button>
    <button on:click={addTodo}>Add Todo</button>
  </div>
  