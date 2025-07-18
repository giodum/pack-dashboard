<script lang="ts">
  import Chart from "./Chart.svelte";
  import type { EChartsOption } from "echarts";

  interface LineSeries {
    name: string;
    data: number[];
  }

  interface Props {
    label: string;
    xAxis: string[];
    series: LineSeries[];
    colors?: string[];
    width?: string;
    height?: string;
  }

  let {
    label,
    xAxis,
    series,
    colors = [
      "#5470C6",
      "#91CC75",
      "#FAC858",
      "#EE6666",
      "#73C0DE",
      "#3BA272",
      "#FC8452",
      "#9A60B4",
      "#EA7CCC"
    ],
    width = "100%",
    height = "400px"
  }: Props = $props();

  const options: EChartsOption = $derived({
    title: {
      text: label,
      left: "center",
      top: "10px",
      textStyle: {
        color: "#90a2b9"
      }
    },
    color: colors,
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: series.map((s) => s.name),
      top: 40,
      left: "center",
      textStyle: {
        color: "#90a2b9",
        fontSize: 14
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xAxis,
      axisLabel: {
        color: "#90a2b9"
      },
      axisLine: {
        lineStyle: {
          color: "#90a2b9"
        }
      }
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#90a2b9"
      },
      axisLine: {
        lineStyle: {
          color: "#90a2b9"
        }
      },
      splitLine: {
        lineStyle: {
          color: "#e0e6ef"
        }
      }
    },
    series: series.map((s) => ({
      name: s.name,
      type: "line" as const,
      data: s.data,
      smooth: false
    }))
  });
</script>

<Chart {options} {width} {height} />
