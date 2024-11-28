<script>
  import axios from "axios";
  import { todos } from "$lib/stores/todosStore";
  import TodoList from "$lib/components/TodoList.svelte";
  import FilterBar from "$lib/components/FilterBar.svelte";

  // State management for ColorPicker
  let isColorPickerOpen = false;
  let selectedTodoId = null;

  async function fetchTodos() {
    try {
      console.log("Fetching todos...");
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log("Response data:", response.data);
      todos.set(response.data.map((todo) => ({ ...todo, color: null })));
      console.log("Todos set in store:", response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  // Lifecycle hook to fetch todos on mount
  fetchTodos();

  function openColorPicker(todoId) {
    selectedTodoId = todoId;
    isColorPickerOpen = true;
  }

  function closeColorPicker() {
    isColorPickerOpen = false;
  }
</script>

<div>
  <FilterBar />
  <TodoList on:openColorPicker={openColorPicker} />
  {#if isColorPickerOpen}
    <ColorPicker
      isOpen={isColorPickerOpen}
      todoId={selectedTodoId}
      onClose={closeColorPicker}
    />
  {/if}
</div>
