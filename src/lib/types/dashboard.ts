export interface DashboardData {
  totalUsers: number;
  activeUsersAccessRate: number;
  totalResources: number;
  resourcesUtilized: number;
  resourcesVariation: number;
  completionRate: number;
  completionRateVariation: number;
  uniqueAccessValue1: number;
  uniqueAccessValue2: number;
  uniqueAccessVariation: number;
  resourcesByCategory: ResourceCategory[];
  mostUsedResource: MostUsedResource[];
  updatedContentSeries: ContentSeries[];
  usageContentSeries: ContentSeries[];
}

export interface ResourceCategory {
  label: string;
  value: number;
}

export interface MostUsedResource {
  slug: string;
  name: string;
  trend?: "+" | "-";
}

export interface ContentSeries {
  month: string;
  value: number;
}
