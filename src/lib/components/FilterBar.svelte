<script>
  import { filters, todos } from "$lib/stores/todosStore";
  import { getUniqueColors } from "$lib/utils/getUniqueColors";

  $: colors = getUniqueColors($todos);

  function clearFilters() {
    filters.set({ color: null, resolved: null });
  }
</script>

<div class="filter-bar">
  <md-outlined-button
    onkeydown={(e) =>
      e.key === "Enter" && filters.update((f) => ({ ...f, resolved: true }))}
    onclick={() => filters.update((f) => ({ ...f, resolved: true }))}
    tabindex="0"
    role="button"
    aria-label="Show resolved tasks"
  >
    Resolved
  </md-outlined-button>
  <md-outlined-button
    onkeydown={(e) =>
      e.key === "Enter" && filters.update((f) => ({ ...f, resolved: false }))}
    onclick={() => filters.update((f) => ({ ...f, resolved: false }))}
    tabindex="0"
    role="button"
    aria-label="Show unresolved tasks"
  >
    Unresolved
  </md-outlined-button>
  {#each colors as color}
    <md-outlined-button
      onkeydown={(e) =>
        e.key === "Enter" && filters.update((f) => ({ ...f, color }))}
      onclick={() => filters.update((f) => ({ ...f, color }))}
      tabindex="0"
      role="button"
      aria-label={`Show tasks with color ${color}`}
    >
      {color}
    </md-outlined-button>
  {/each}
  <md-outlined-button
    onkeydown={(e) => e.key === "Enter" && clearFilters()}
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
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .filter-bar md-outlined-button {
    margin: 0;
    padding: 0.6rem 1.2rem;
    display: inline-block;
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 8px;
    color: #ffffff;
    transition: all 0.3s ease;
    cursor: pointer;
  }
</style>
