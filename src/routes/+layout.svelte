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
  <div class="relative flex flex-grow flex-col bg-slate-50">
    {#if navigating.to}
      <Loader />
    {:else}
      <main
        id="main-content"
        class="relative m-4 my-6 flex-grow rounded-lg bg-white p-3 shadow-[0_0_6px_rgba(0,0,0,0.3)] md:m-0 md:mx-auto md:w-[90%] md:p-6 lg:my-12 lg:w-[85%]"
      >
        {@render children?.()}
      </main>
    {/if}
  </div>
  <Footer />
</div>
