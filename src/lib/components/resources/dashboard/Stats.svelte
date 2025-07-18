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

<GaugeChart
  label="Active Users Access Rate"
  color="#92cff4"
  value={activeUsersAccessRate}
/>
<GaugeChart
  label="Resources Utilized"
  color="#ff6e76"
  value={resourcesUtilized}
/>
<PieChart
  label="Resources by category"
  data={pieData}
  colors={["#ff8b45", "#ff9a54", "#ffb47a", "#ffd1a6"]}
  width="320px"
  height="320px"
/>
<LineChart
  label="Uploaded content vs Usage over time"
  {xAxis}
  {series}
  colors={["#5470C6", "#91CC75"]}
  width="600px"
  height="400px"
/>
