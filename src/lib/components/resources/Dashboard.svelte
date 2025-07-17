<script lang="ts">
  import Loader from "../shared/Loader.svelte";
  import type { DashboardData } from "$lib/types/dashboard";

  let data = $state<DashboardData | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);

  async function fetchDashboard() {
    loading = true;
    error = null;

    try {
      // call to server-side API
      const response = await fetch("/api/resources/dashboard");

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
  <div class="error">
    Error: {error}
    <button onclick={fetchDashboard}>Retry</button>
  </div>
{:else if data}
  <div>
    <h1>Dashboard</h1>
    <button onclick={fetchDashboard}>Refresh</button>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
{/if}
