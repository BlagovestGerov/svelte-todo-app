<script>
  import "@material/web/dialog/dialog.js";
  import "@material/web/button/filled-button.js";
  export let isOpen = false;
  export let onClose;
  export let onAddTodo;

  let newTodoTitle = "";

  function handleAddTodo() {
    if (!newTodoTitle.trim()) {
      alert("Title cannot be empty.");
      return;
    }

    onAddTodo(newTodoTitle.trim());
    newTodoTitle = "";
    onClose();
  }
</script>

<md-dialog open={isOpen} onclosed={onClose}>
  <div slot="headline">Add a New Todo</div>
  <form id="todo-form" slot="content" onsubmit={handleAddTodo}>
    <input
      type="text"
      bind:value={newTodoTitle}
      placeholder="Enter todo title"
      aria-label="Todo title"
      required
      class="todo-input"
    />
  </form>
  <div slot="actions">
    <md-filled-button
      type="button"
      onclick={onClose}
      role="button"
      onkeydown={(e) => e.key === "Enter" && onClose()}
      tabindex="0"
    >
      Cancel
    </md-filled-button>
    <md-filled-button type="submit" form="todo-form">
      Add Todo
    </md-filled-button>
  </div>
</md-dialog>

<style>
  .todo-input {
    width: 100%;
    padding: 0.5rem;
    margin-top: 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>
