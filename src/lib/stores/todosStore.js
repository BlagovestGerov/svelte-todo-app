import { writable, derived } from "svelte/store";

export const todos = writable([]);

export const filters = writable({ color: null, resolved: null });

export const filteredTodos = derived([todos, filters], ([$todos, $filters]) => {
  return $todos.filter((todo) => {
    if ($filters.color && todo.color !== $filters.color) return false;
    if ($filters.resolved === true && !todo.completed) return false;
    if ($filters.resolved === false && todo.completed) return false;
    return true;
  });
});
