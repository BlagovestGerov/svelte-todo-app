<script>
  import DesktopSideMenu from "$lib/components/SideMenu.svelte";
  import MobileSideMenu from "$lib/components/MobileSideMenu.svelte";
  import "../global.css";

  let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script>

<div class="app-container">
  <aside class="desktop-menu">
    <DesktopSideMenu />
  </aside>

  <header class="mobile-header">
    <button
      class="hamburger-button"
      on:click={toggleMobileMenu}
      on:keydown={(e) => e.key === "Enter" && toggleMobileMenu()}
      aria-label="Open menu"
    >
      &#9776;
    </button>
  </header>

  <main class="main-content">
    <slot name="filter-bar" />
    <slot />
  </main>

  {#if isMobileMenuOpen}
    <div
      class="mobile-side-menu-overlay"
      on:click={() => (isMobileMenuOpen = false)}
      on:keydown={(e) => e.key === "Escape" && (isMobileMenuOpen = false)}
      tabindex="0"
      aria-label="Close menu"
      role="button"
    >
      <aside class="mobile-side-menu" aria-labelledby="mobile-menu">
        <MobileSideMenu />
      </aside>
    </div>
  {/if}
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    overflow: hidden;
  }

  .desktop-menu {
    width: 270px;
    background-color: #f5f5f5;
    padding: 1rem;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
    height: 100vh;
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
  }

  .desktop-menu::-webkit-scrollbar {
    width: 6px;
  }

  .desktop-menu::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }

  .mobile-header {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #6200ea;
    z-index: 1000;
    padding: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .hamburger-button {
    background-color: transparent;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  .main-content {
    flex: 1;
    margin-left: 300px;
    padding: 1rem;
    overflow-y: auto;
    height: 100vh;
    box-sizing: border-box;
  }

  .main-content::-webkit-scrollbar {
    width: 8px;
  }

  .main-content::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }

  .mobile-side-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .mobile-side-menu {
    position: relative;
    width: 270px;
    height: 100%;
    background-color: #ffffff;
    z-index: 1001;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
  }

  .mobile-side-menu::-webkit-scrollbar {
    width: 6px;
  }

  .mobile-side-menu::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    .app-container {
      flex-direction: column;
    }

    .desktop-menu {
      display: none;
    }

    .mobile-header {
      display: block;
    }

    .main-content {
      margin-left: 0;
      margin-top: 45px;
    }
  }
</style>
