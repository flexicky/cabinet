import { computed, ref } from "vue";
import type {
  CommunityAnalyticsRow,
  CommunitySort,
  VkCommunity,
} from "~/types/analytics";
import { communities } from "~/data/vk-mocks";

function sortValue(community: VkCommunity, sortBy: CommunitySort) {
  if (sortBy === "reach") return community.reach;
  if (sortBy === "engagement") return community.engagement;
  return community.followers;
}

export function useCommunitiesAnalytics() {
  const searchQuery = ref("");
  const sortBy = ref<CommunitySort>("followers");

  const filteredCommunities = computed<CommunityAnalyticsRow[]>(() => {
    const query = searchQuery.value.trim().toLocaleLowerCase("ru");

    return communities
      .filter(
        (community) =>
          !query ||
          `${community.name} ${community.slug}`
            .toLocaleLowerCase("ru")
            .includes(query),
      )
      .sort(
        (first, second) =>
          sortValue(second, sortBy.value) - sortValue(first, sortBy.value),
      )
      .map((community) => ({
        ...community,
        formattedFollowers: community.followers.toLocaleString("ru-RU"),
        formattedReach: community.reach.toLocaleString("ru-RU"),
        formattedEngagement: `${community.engagement.toFixed(2).replace(".", ",")}%`,
        engagementWidth: Math.min(
          100,
          Math.round((community.engagement / 6) * 100),
        ),
      }));
  });

  const summary = computed(() => ({
    count: communities.length,
    followers: communities
      .reduce((total, community) => total + community.followers, 0)
      .toLocaleString("ru-RU"),
    averageEngagement: `${(communities.reduce((total, community) => total + community.engagement, 0) / communities.length).toFixed(2).replace(".", ",")}%`,
  }));

  return { searchQuery, sortBy, communities: filteredCommunities, summary };
}
