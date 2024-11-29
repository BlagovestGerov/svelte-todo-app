export function getUniqueColors(todos) {
    return Array.from(new Set(todos.map((todo) => todo.color).filter(Boolean)));
  }
  