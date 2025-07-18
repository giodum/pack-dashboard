<script lang="ts">
  import type { DashboardData, MostUsedResource } from "$lib/types/dashboard";
  import Icon from "@iconify/svelte";
  interface Props {
    dashboardData: DashboardData;
  }
  let { dashboardData }: Props = $props();

  function getTrendIcon(trend?: string) {
    if (trend === "+") {
      return { icon: "mdi:arrow-up-bold", color: "text-green-600" };
    } else {
      return { icon: "mdi:arrow-down-bold", color: "text-red-600" };
    }
  }

  const resources = dashboardData.mostUsedResource;
</script>

<div class="mb-6">
  <h2 class="mb-3 text-base font-semibold text-slate-400">
    Mostly Used resources
  </h2>
  <ul class="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
    {#each resources as resource}
      <li class="flex items-center justify-between py-0.5">
        <a
          class="hover:text-coral-400 flex-1 truncate text-base font-semibold text-gray-900 underline transition-colors duration-150"
          href={`/resources/resource/${resource.slug}`}
        >
          {resource.name}
        </a>
        {#if resource.trend}
          {@const trendIcon = getTrendIcon(resource.trend)}
          <Icon
            icon={trendIcon?.icon}
            width="18"
            class={`ml-2 ${trendIcon?.color}`}
          />
        {/if}
      </li>
    {/each}
  </ul>
</div>
