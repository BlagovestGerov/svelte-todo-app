<script>
    import { filteredTodos } from '$lib/stores/todosStore';
    import TodoItem from '$lib/components/TodoItem.svelte';
    $: todos = $filteredTodos;
  </script>
  
  <div>
    {#each todos as todo (todo.id)}
      <TodoItem {todo} />
    {/each}
  </div>
  