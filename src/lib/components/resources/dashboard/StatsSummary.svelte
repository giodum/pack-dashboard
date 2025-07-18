<script lang="ts">
  import type { DashboardData } from "../../../types/dashboard";
  import Icon from "@iconify/svelte";
  interface Props {
    dashboardData: DashboardData;
  }
  let { dashboardData }: Props = $props();

  function getTrend(variation: number) {
    if (variation > 0)
      return {
        icon: "mdi:arrow-up-bold",
        color: "text-green-600",
        sign: "+",
        value: variation
      };
    if (variation < 0)
      return {
        icon: "mdi:arrow-down-bold",
        color: "text-red-600",
        sign: "",
        value: variation
      };
    return null;
  }

  const resourcesTrend = getTrend(dashboardData.resourcesVariation);
  const completionTrend = getTrend(dashboardData.completionRateVariation);
  const uniqueAccessTrend = getTrend(dashboardData.uniqueAccessVariation);
</script>

<div
  class="flex flex-col divide-y divide-gray-200 overflow-hidden rounded-xl bg-white md:flex-row md:divide-x md:divide-y-0"
>
  <div
    class="flex min-w-0 flex-1 flex-col items-start px-6 py-4 md:px-8 md:py-6"
  >
    <div class="mb-2 flex items-center text-base font-semibold text-slate-400">
      <span class="mr-2 h-5 w-5 opacity-70">
        <Icon icon="mdi:cloud-upload-outline" width="20" />
      </span>
      Resources Uploaded
    </div>
    <div class="flex w-full items-end">
      <span class="text-4xl font-bold text-gray-900"
        >{dashboardData.totalResources}</span
      >
      {#if resourcesTrend}
        <span
          class="mb-1 ml-2 flex items-center text-sm {resourcesTrend.color}"
        >
          <Icon icon={resourcesTrend.icon} width="18" class="mr-1" />
          {resourcesTrend.sign}{Math.abs(resourcesTrend.value)}%
        </span>
      {/if}
    </div>
  </div>
  <div
    class="flex min-w-0 flex-1 flex-col items-start px-6 py-4 md:px-8 md:py-6"
  >
    <div class="mb-2 flex items-center text-base font-semibold text-slate-400">
      <span class="mr-2 h-5 w-5 opacity-70">
        <Icon icon="mdi:check-circle-outline" width="20" />
      </span>
      Completion Rate
    </div>
    <div class="flex w-full items-end">
      <span class="text-4xl font-bold text-gray-900"
        >{dashboardData.completionRate}%</span
      >
      {#if completionTrend}
        <span
          class="mb-1 ml-2 flex items-center text-sm {completionTrend.color}"
        >
          <Icon icon={completionTrend.icon} width="18" class="mr-1" />
          {completionTrend.sign}{Math.abs(completionTrend.value)}%
        </span>
      {/if}
    </div>
  </div>
  <div
    class="flex min-w-0 flex-1 flex-col items-start px-6 py-4 md:px-8 md:py-6"
  >
    <div class="mb-2 flex items-center text-base font-semibold text-slate-400">
      <span class="mr-2 h-5 w-5 opacity-70">
        <Icon icon="mdi:account-group-outline" width="20" />
      </span>
      Unique Access
    </div>
    <div class="flex w-full items-end">
      <span class="text-4xl font-bold text-gray-900"
        >{dashboardData.uniqueAccessValue1}</span
      >
      <span class="ml-2 text-4xl font-bold text-gray-900"
        >/ {dashboardData.uniqueAccessValue2}</span
      >
      {#if uniqueAccessTrend}
        <span
          class="mb-1 ml-2 flex items-center text-sm {uniqueAccessTrend.color}"
        >
          <Icon icon={uniqueAccessTrend.icon} width="18" class="mr-1" />
          {uniqueAccessTrend.sign}{Math.abs(uniqueAccessTrend.value)}%
        </span>
      {/if}
    </div>
  </div>
</div>
