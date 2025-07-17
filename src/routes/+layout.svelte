<script lang="ts">
  import { navigating } from "$app/state";
  import Footer from "$src/lib/components/layout/Footer.svelte";
  import Header from "$src/lib/components/layout/Header.svelte";
  import Loader from "$src/lib/components/shared/Loader.svelte";
  import "../app.css";

  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="3xl:mx-auto 3xl:max-w-screen-3xl flex h-screen flex-col">
  <Header />
  <main class="relative flex-grow">
    {#if navigating.to}
      <Loader />
    {:else}
      {@render children?.()}
    {/if}
  </main>
  <Footer />
</div>
