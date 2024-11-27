<script>
    import { filters, todos } from '$lib/stores/todosStore';
  
    // Extract unique colors
    $: colors = Array.from(new Set($todos.map((todo) => todo.color).filter(Boolean)));
  
    function clearFilters() {
      filters.set({ color: null, resolved: null });
    }
  </script>
  
  <div class="filter-bar">
    <button on:click={() => filters.update((f) => ({ ...f, resolved: true }))}>
      Resolved
    </button>
    <button on:click={() => filters.update((f) => ({ ...f, resolved: false }))}>
      Unresolved
    </button>
    {#each colors as color}
      <button on:click={() => filters.update((f) => ({ ...f, color }))}>
        {color}
      </button>
    {/each}
    <button on:click={clearFilters}>Clear Filters</button>
  </div>
  