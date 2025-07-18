<script lang="ts">
  import * as echarts from "echarts";
  import type { EChartsOption, ECharts } from "echarts";

  interface Props {
    options: EChartsOption;
    theme?: string;
    width?: string;
    height?: string;
  }

  let {
    options,
    theme = "default",
    width = "100%",
    height = "400px"
  }: Props = $props();

  let chart: ECharts;
  let chartContainer: HTMLElement;

  $effect(() => {
    // Initialize the chart
    chart = echarts.init(chartContainer, theme);

    // Set the chart options
    chart.setOption(options);

    // Handle window resize
    const handleResize = () => {
      chart?.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chart) {
        chart.dispose();
      }
    };
  });
</script>

<div bind:this={chartContainer} style="width: {width}; height: {height};"></div>
