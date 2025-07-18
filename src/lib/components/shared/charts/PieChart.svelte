<script lang="ts">
  import Chart from "./Chart.svelte";
  import type { EChartsOption } from "echarts";

  interface Props {
    label: string;
    data: { value: number; name: string }[];
    colors?: string[];
    width?: string;
    height?: string;
  }

  let {
    label,
    data,
    colors = ["#ff8b45", "#ff9a54", "#ffb47a", "#ffd1a6", "#b94f1d", "#8c3913"],
    width = "400px",
    height = "300px"
  }: Props = $props();

  // Calculate total for percentage
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const options: EChartsOption = $derived({
    title: {
      text: label,
      left: "center",
      top: "10px",
      textStyle: {
        color: "#90a2b9"
      }
    },
    tooltip: {
      trigger: "item"
    },
    legend: {
      show: false
    },
    color: colors,
    series: [
      {
        type: "pie" as const,
        radius: "60%",
        center: ["50%", "50%"],
        data: data,
        label: {
          show: false
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  });
</script>

<div class="flex w-full flex-row items-center">
  <Chart {options} {width} {height} />
  <div class="ml-6 flex flex-col space-y-2">
    {#each data as item, i (item.name)}
      <div class="flex items-center space-x-2">
        <span
          style="display:inline-block;width:16px;height:16px;background:{colors[
            i % colors.length
          ]};border-radius:3px;"
        ></span>
        <span class="text-[14px] font-medium text-[#90a2b9]">
          {item.name} ({((item.value / total) * 100).toFixed(1)}%)
        </span>
      </div>
    {/each}
  </div>
</div>
