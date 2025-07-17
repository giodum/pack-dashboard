<script lang="ts">
  import Menu from "./Menu.svelte";
  import Icon from "@iconify/svelte";
</script>

<header class="px-2 shadow-md md:px-6">
  <a href="#main-content" class="sr-only focus:not-sr-only">
    Skip to main content
  </a>
  <div class="flex items-center justify-between">
    <a href="/" aria-label="Go to homepage">
      <img src="/logo.webp" alt="Pack logo" class="max-w-20" />
    </a>
    <Menu />
  </div>
</header>
