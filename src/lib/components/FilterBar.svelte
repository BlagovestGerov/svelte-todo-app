<script>
  import { filters, todos } from '$lib/stores/todosStore';

  $: colors = Array.from(new Set($todos.map((todo) => todo.color).filter(Boolean)));

  function clearFilters() {
    filters.set({ color: null, resolved: null });
  }
</script>

<div class="filter-bar">
  <md-outlined-button
    onkeydown={(e) => e.key === 'Enter' && filters.update((f) => ({ ...f, resolved: true }))}
    onclick={() => filters.update((f) => ({ ...f, resolved: true }))}
    tabindex="0"
    role="button"
    aria-label="Show resolved tasks"
  >
    Resolved
  </md-outlined-button>
  <md-outlined-button
    onkeydown={(e) => e.key === 'Enter' && filters.update((f) => ({ ...f, resolved: false }))}
    onclick={() => filters.update((f) => ({ ...f, resolved: false }))}
    tabindex="0"
    role="button"
    aria-label="Show unresolved tasks"
  >
    Unresolved
  </md-outlined-button>
  {#each colors as color}
    <md-outlined-button
    onkeydown={(e) => e.key === 'Enter' && filters.update((f) => ({ ...f, color }))}
      onclick={() => filters.update((f) => ({ ...f, color }))}
      tabindex="0"
      role="button"
      aria-label={`Show tasks with color ${color}`}
    >
      {color}
    </md-outlined-button>
  {/each}
  <md-outlined-button
  onkeydown={(e) => e.key === 'Enter' && clearFilters()}
    onclick={clearFilters}
    tabindex="0"
    role="button"
    aria-label="Clear all filters"
  >
    Clear Filters
  </md-outlined-button>
</div>

<style>
  .filter-bar {
    margin-bottom: 1rem;
  }
  .filter-bar md-outlined-button {
    margin: 0.5rem 0;
    display: block;
    width: 100%;
  }
</style>
