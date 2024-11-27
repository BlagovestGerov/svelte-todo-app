<script>
    import { todos } from '$lib/stores/todosStore';
  
    export let todoId;
    export let isOpen = false;
    export let onClose;
  
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  
    function selectColor(color) {
      todos.update((current) =>
        current.map((todo) =>
          todo.id === todoId ? { ...todo, color } : todo
        )
      );
      onClose();
    }
  </script>
  
  {#if isOpen}
    <div class="modal">
      <div class="modal-content">
        <h3>Select a Color</h3>
        <div class="colors">
          {#each colors as color}
            <div
              class="color"
              style="background-color: {color}"
              on:click={() => selectColor(color)}
            ></div>
          {/each}
        </div>
        <button on:click={onClose}>Close</button>
      </div>
    </div>
  {/if}
  