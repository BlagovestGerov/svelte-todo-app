<script>
  import TodoList from "$lib/components/TodoList.svelte";
  import FilterBar from "$lib/components/FilterBar.svelte";
  import { todos } from "$lib/stores/todosStore";
  import { fetchTodos } from "$lib/services/todosService";

  let selectedTodoId = null;

  async function loadTodos() {
    try {
      console.log("Fetching todos...");
      const fetchedTodos = await fetchTodos();
      console.log("Fetched todos:", fetchedTodos);
      todos.set(fetchedTodos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  loadTodos();
</script>

<div>
  <FilterBar />
  <TodoList />
</div>
