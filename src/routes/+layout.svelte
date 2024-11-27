<script>
    import SideMenu from '$lib/components/SideMenu.svelte';
  </script>
  
  <div style="display: flex; height: 100vh;">
    <!-- SideMenu on the left -->
    <aside style="width: 250px; background-color: #f5f5f5; padding: 1rem; box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);">
      <SideMenu />
    </aside>
  
    <!-- Main content -->
    <main style="flex: 1; padding: 1rem;">
      <slot />
    </main>
  </div>
  