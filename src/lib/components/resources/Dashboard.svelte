<script lang="ts">
  import Loader from "../shared/Loader.svelte";
  import type { DashboardData } from "$lib/types/dashboard";
  import Button from "../shared/Button.svelte";

  let data = $state<DashboardData | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);

  async function fetchDashboard() {
    loading = true;
    error = null;

    try {
      // call to server-side API
      const response = await fetch("/api/resources/dashboard/stats");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      data = await response.json();
    } catch (err: unknown) {
      error = err instanceof Error ? err.message : "Failed to load data";
    } finally {
      loading = false;
    }
  }

  // Run on mount using $effect
  $effect(() => {
    fetchDashboard();
  });
</script>

{#if loading}
  <Loader />
{:else if error}
  <div>
    <p class="mb-4 text-red-700">Error: {error}</p>
    <Button label="Retry" onClick={fetchDashboard} />
  </div>
{:else if data}
  <div>
    <h1>Dashboard</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
{/if}
