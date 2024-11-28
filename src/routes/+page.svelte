<script>
    import axios from 'axios';
    import { todos } from '$lib/stores/todosStore';
    import TodoList from '$lib/components/TodoList.svelte';
    import FilterBar from '$lib/components/FilterBar.svelte';
    import { onMount } from 'svelte';
  
    onMount(async () => {
      try {
      console.log('Fetching todos...');
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log('Response data:', response.data);
      todos.set(
        response.data.map((todo) => ({ ...todo, color: null }))
      );
      console.log('Todos set in store:', response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
    });
  </script>
  
  <div>
    <FilterBar />
    <TodoList />
  </div>
  