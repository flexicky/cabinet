export type MetricTone = "violet" | "lime" | "pink" | "blue";

export interface Metric {
  label: string;
  value: string;
  caption: string;
  icon: string;
  tone: MetricTone;
  delta?: string;
}

export interface ChartSeries {
  name: string;
  color: string;
  values: number[];
}

export interface VkCommunity {
  id: string;
  name: string;
  initial: string;
  avatarTone: "blue" | "coral" | "lavender";
  type: "Группа" | "Страница";
  slug: string;
  followers: number;
  growth: string;
  reach: number;
  engagement: number;
  posts: number;
}

export interface CommunityAnalyticsRow extends VkCommunity {
  formattedFollowers: string;
  formattedReach: string;
  formattedEngagement: string;
  engagementWidth: number;
}

export type TrackerRange = "day" | "week" | "month";
export type CommunitySort = "followers" | "reach" | "engagement";
