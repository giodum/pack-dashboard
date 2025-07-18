import type { DashboardData } from "$src/lib/types/dashboard";

export function getActiveUsersAccessRatePercent(data: DashboardData): number {
  // Compute the percentage of active users
  if (!data.totalUsers) return 0;
  return Math.min(
    100,
    Math.max(
      0,
      Math.round((data.activeUsersAccessRate / data.totalUsers) * 100)
    )
  );
}

export function getResourcesUtilizedPercent(data: DashboardData): number {
  // Compute the percentage of resources utilized
  if (!data.totalResources) return 0;
  return Math.min(
    100,
    Math.max(
      0,
      Math.round((data.resourcesUtilized / data.totalResources) * 100)
    )
  );
}

export function getResourcesByCategoryPieData(
  data: DashboardData
): { value: number; name: string }[] {
  // Map ResourceCategory[] to PieChart data
  return data.resourcesByCategory.map((cat) => ({
    value: cat.value,
    name: cat.label
  }));
}

export function getContentVsUsageLineData(data: DashboardData): {
  xAxis: string[];
  series: { name: string; data: number[] }[];
} {
  // Both series share the same timeline (month)
  const xAxis = data.updatedContentSeries.map((s) => s.month);
  return {
    xAxis,
    series: [
      {
        name: "Uploaded Content",
        data: data.updatedContentSeries.map((s) => s.value)
      },
      {
        name: "Usage",
        data: data.usageContentSeries.map((s) => s.value)
      }
    ]
  };
}
