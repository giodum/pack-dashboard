<script lang="ts">
  import GaugeChart from "$lib/components/shared/charts/GaugeChart.svelte";
  import PieChart from "$lib/components/shared/charts/PieChart.svelte";
  import LineChart from "$lib/components/shared/charts/LineChart.svelte";
  import type { DashboardData } from "$src/lib/types/dashboard";
  import {
    getActiveUsersAccessRatePercent,
    getResourcesUtilizedPercent,
    getResourcesByCategoryPieData,
    getContentVsUsageLineData
  } from "$src/utils/dashboard";
  import StatsSummary from "./StatsSummary.svelte";
  import MostlyUsedResource from "./MostlyUsedResource.svelte";

  interface Props {
    dashboardData: DashboardData;
  }

  let { dashboardData }: Props = $props();

  // Chart data from dashboardData
  const activeUsersAccessRate = getActiveUsersAccessRatePercent(dashboardData);
  const resourcesUtilized = getResourcesUtilizedPercent(dashboardData);
  const pieData = getResourcesByCategoryPieData(dashboardData);
  const { xAxis, series } = getContentVsUsageLineData(dashboardData);
</script>

<!-- Bento structure -->
<div
  class="mb-6 grid h-full w-full grid-cols-1
    grid-rows-none
    gap-4
    sm:grid-cols-2
    sm:grid-rows-none
    lg:grid-cols-4
    lg:grid-rows-[repeat(4,1fr)_auto_auto]"
>
  <div
    class="col-auto row-auto flex items-center justify-center rounded-xl
      bg-white p-4
      shadow lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
  >
    <GaugeChart
      label="Active Users Access Rate"
      color="#92cff4"
      value={activeUsersAccessRate}
    />
  </div>

  <div
    class="col-auto row-auto flex items-center justify-center rounded-xl
      bg-white p-4
      shadow lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3"
  >
    <GaugeChart
      label="Resources Utilized"
      color="#ff6e76"
      value={resourcesUtilized}
    />
  </div>

  <div
    class="col-auto row-auto flex items-center justify-center rounded-xl
      bg-white p-4
      shadow lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2"
  >
    <StatsSummary {dashboardData} />
  </div>

  <div
    class="col-auto row-auto flex items-center justify-center rounded-xl
      bg-white p-4
      shadow lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-5"
  >
    <PieChart
      label="Resources by category"
      data={pieData}
      colors={["#ff8b45", "#ff9a54", "#ffb47a", "#ffd1a6"]}
      width="320px"
      height="320px"
    />
  </div>

  <div
    class="col-auto row-auto flex items-center justify-center rounded-xl
      bg-white p-4
      shadow lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-5"
  >
    <LineChart
      label="Uploaded content vs Usage over time"
      {xAxis}
      {series}
      colors={["#5470C6", "#91CC75"]}
      width="600px"
      height="400px"
    />
  </div>

  <!-- MostlyUsedResource: row 5-6, col 1-4 -->
  <div
    class="col-auto row-auto flex items-center justify-center rounded-xl bg-white
      p-8 shadow
      lg:col-start-1 lg:col-end-5 lg:row-start-5 lg:row-end-7"
  >
    <MostlyUsedResource {dashboardData} />
  </div>
</div>
