import {
  communities,
  overviewChartLabels,
  overviewChartSeries,
  overviewMetrics,
} from "~/data/vk-mocks";

export function useDashboardAnalytics() {
  const previewCommunities = computed(() =>
    communities.map((community) => ({
      ...community,
      formattedFollowers: community.followers.toLocaleString("ru-RU"),
      formattedReach: community.reach.toLocaleString("ru-RU"),
      formattedEngagement: `${community.engagement.toFixed(2).replace(".", ",")}%`,
    })),
  );

  return {
    metrics: overviewMetrics,
    chartLabels: overviewChartLabels,
    chartSeries: overviewChartSeries,
    previewCommunities,
  };
}
