<script lang="ts">
  import Loader from "../shared/Loader.svelte";
  import type { DashboardData } from "$lib/types/dashboard";
  import Button from "../shared/Button.svelte";
  import type { UsageData } from "$src/lib/types/usage";

  let dashboardData = $state<DashboardData | null>(null);
  let dashboardLoading = $state(true);
  let dashboardError = $state<string | null>(null);

  let usageData = $state<UsageData | null>(null);
  let usageLoading = $state(true);
  let usageError = $state<string | null>(null);

  async function fetchDashboard() {
    dashboardLoading = true;
    dashboardError = null;

    try {
      // call to server-side API
      const response = await fetch("/api/resources/dashboard/stats");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      dashboardData = await response.json();
    } catch (err: unknown) {
      dashboardError =
        err instanceof Error ? err.message : "Failed to load data";
    } finally {
      dashboardLoading = false;
    }
  }

  async function fetchUsage() {
    usageLoading = true;
    usageError = null;
    try {
      const response = await fetch("/api/resources/dashboard/usage");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      usageData = await response.json();
    } catch (err: unknown) {
      usageError =
        err instanceof Error ? err.message : "Failed to load usage data";
    } finally {
      usageLoading = false;
    }
  }

  // Run on mount using $effect
  $effect(() => {
    fetchDashboard();
    fetchUsage();
  });
</script>

{#if dashboardLoading}
  <Loader />
{:else if dashboardError}
  <div>
    <p class="mb-4 text-red-700">Dashboard Error: {dashboardError}</p>
    <Button label="Retry" onClick={fetchDashboard} />
  </div>
{:else if dashboardData}
  <div>
    <h1>Dashboard</h1>
    <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
  </div>
{/if}

<!-- Usage Data Section -->
{#if usageLoading}
  <Loader />
{:else if usageError}
  <div>
    <p class="mb-4 text-red-700">Usage Error: {usageError}</p>
    <Button label="Retry Usage" onClick={fetchUsage} />
  </div>
{:else if usageData}
  <div>
    <h2>Usage</h2>
    <pre>{JSON.stringify(usageData, null, 2)}</pre>
  </div>
{/if}
