<script lang="ts">
  import Button from "$src/lib/components/shared/Button.svelte";
  import "../app.css";
</script>

<div
  class="flex h-full flex-col items-center justify-center bg-white px-4 py-12"
>
  <div class="text-center">
    <h1 class="text-coral-500 mb-2 text-2xl font-bold md:text-3xl">
      Page Not Found - 404
    </h1>
    <p class="mb-6 text-base text-gray-600 md:text-lg">
      Sorry, the page you are looking for does not exist or has been moved.
    </p>
    <Button label="Go back home" href="/" />
  </div>
</div>
