<script lang="ts">
  import Chart from "./Chart.svelte";
  import type { EChartsOption } from "echarts";

  interface Props {
    label: string;
    color?: string;
    value: number;
    min?: number;
    max?: number;
    unit?: string;
    width?: string;
    height?: string;
  }

  let {
    label,
    color = "#FF6E76",
    value,
    min = 0,
    max = 100,
    unit = "%",
    width = "100%",
    height = "400px"
  }: Props = $props();

  const options: EChartsOption = $derived({
    series: [
      {
        type: "gauge" as const,
        startAngle: 200,
        endAngle: -20,
        min,
        max,
        progress: {
          show: true,
          width: 18,
          itemStyle: {
            color: color
          }
        },
        axisLine: {
          lineStyle: {
            width: 18,
            color: [[1, "#d6dae3"]]
          }
        },
        pointer: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          valueAnimation: false,
          offsetCenter: [0, "60%"],
          formatter: unit ? `{value} ${unit}` : "{value}"
        },
        data: [
          {
            value: value
          }
        ]
      }
    ]
  });
</script>

<div class="flex flex-col items-center">
  <Chart {options} {width} {height} />
  {#if label}
    <div class="font-lg mb-2 text-center text-slate-400">
      {label}
    </div>
  {/if}
</div>
