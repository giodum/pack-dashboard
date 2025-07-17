<script lang="ts">
  import Menu from "../menu/Menu.svelte";
  import UserMenu from "../menu/UserMenu.svelte";
</script>

<header class="px-2 shadow-md md:px-6">
  <a href="#main-content" class="sr-only focus:not-sr-only">
    Skip to main content
  </a>
  <div class="flex items-center justify-between gap-2">
    <a href="/" aria-label="Go to homepage" class="order-2 lg:order-1">
      <img src="/logo.webp" alt="Pack logo" class="max-w-20" />
    </a>
    <div class="order-3 lg:order-2">
      <Menu />
    </div>
    <div class="order-1 lg:order-3">
      <UserMenu />
    </div>
  </div>
</header>
