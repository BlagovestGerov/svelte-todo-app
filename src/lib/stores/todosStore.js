import { writable, derived } from "svelte/store";

// Todos state
export const todos = writable([]);

// Filters state
export const filters = writable({ color: null, resolved: null });

// Derived store to filter todos based on active filters
export const filteredTodos = derived([todos, filters], ([$todos, $filters]) => {
  return $todos.filter((todo) => {
    if ($filters.color && todo.color !== $filters.color) return false;
    if ($filters.resolved === true && !todo.completed) return false;
    if ($filters.resolved === false && todo.completed) return false;
    return true;
  });
});
