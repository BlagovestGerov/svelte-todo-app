export const API_URL = import.meta.env.VITE_API_URL;

export function createMenuItems({
  markAllResolved,
  markAllUnresolved,
  removeAllTodos,
  addTodo,
}) {
  return [
    {
      label: "Mark All Resolved",
      ariaLabel: "Mark all tasks as resolved",
      onClick: markAllResolved,
    },
    {
      label: "Mark All Unresolved",
      ariaLabel: "Mark all tasks as unresolved",
      onClick: markAllUnresolved,
    },
    {
      label: "Remove All",
      ariaLabel: "Remove all tasks",
      onClick: removeAllTodos,
    },
    {
      label: "Add Todo",
      ariaLabel: "Add a new task",
      onClick: addTodo,
    },
  ];
}
