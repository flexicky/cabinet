<template>
  <div>
    <PageHeading
      eyebrow="VK · Аналитика сообществ"
      title="Группы и страницы"
      description="Отслеживайте рост, охваты и вовлечённость ваших площадок."
    >
      <template #actions
        ><ConnectCommunityButton
          @connect="showToast('Подключение VK появится вместе с API')"
      /></template>
    </PageHeading>

    <CommunitiesSummary
      :count="summary.count"
      :followers="summary.followers"
      :average-engagement="summary.averageEngagement"
    />

    <CommunityAnalyticsTable
      v-model:search-query="searchQuery"
      v-model:sort-by="sortBy"
      :communities="communities"
      @details="showCommunityDetails"
    />

    <SectionHeading
      title="На что обратить внимание"
      description="Короткие подсказки по эффективности площадок"
    />
    <div class="content-grid highlights-grid">
      <CommunityHighlightCard
        title="Лучший рост"
        subtitle="За последние 7 дней"
        value="+12,4%"
        detail="Дизайн среда"
        description="Больше всего новых подписчиков среди ваших страниц"
        icon="↗"
        tone="lime"
      />
      <CommunityHighlightCard
        title="Лучшее вовлечение"
        subtitle="Средний показатель ER"
        value="5,24%"
        detail="Monst SMM"
        description="На 0,42% выше среднего по вашим сообществам"
        icon="✳"
        tone="violet"
      />
    </div>

    <MockDataNotice
      message="Показатели на странице демонстрационные. Реальные данные ВКонтакте подключим после готовности API."
      compact
    />
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Группы и страницы — Monst VK Analytics" });

const { searchQuery, sortBy, communities, summary } = useCommunitiesAnalytics();
const { showToast } = useToast();

function showCommunityDetails(communityId: string) {
  const community = communities.value.find((item) => item.id === communityId);
  if (community)
    showToast(`Детальная карточка «${community.name}» появится с API`);
}
</script>
