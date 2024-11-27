<script>
    import axios from 'axios';
    import { todos } from '$lib/stores/todosStore';
    import TodoList from '$lib/components/TodoList.svelte';
    import { onMount } from 'svelte';
  
    onMount(async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      todos.set(
        response.data.map((todo) => ({ ...todo, color: null }))
      );
    });
  </script>
  
  <div>
    <TodoList />
  </div>
  