<script>
  export let isOpen = false;
  export let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  export let onSelect;
  export let onClose;
  export let selectedColor = null;

  function selectColor(color) {
    onSelect(color);
    onClose();
  }
</script>

{#if isOpen}
  <div class="modal" role="dialog" aria-labelledby="color-picker-title">
    <div class="modal-content">
      <h3 id="color-picker-title">Select a Color</h3>
      <div class="colors" role="listbox">
        {#each colors as color}
          <div
            class="color"
            style="background-color: {color}"
            on:click={() => selectColor(color)}
            on:keydown={(e) => e.key === "Enter" && selectColor(color)}
            role="option"
            aria-selected={selectedColor === color}
            tabindex="0"
            aria-label={`Select ${color}`}
          ></div>
        {/each}
      </div>
      <button on:click={onClose} aria-label="Close the color picker"
        >Close</button
      >
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .modal-content h3 {
    margin-bottom: 1rem;
  }

  .colors {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .color {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.2s ease;
  }

  .color:hover,
  .color:focus {
    border-color: black;
  }

  button {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #e0e0e0;
  }
</style>
