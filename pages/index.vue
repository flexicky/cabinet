<template>
  <div>
    <PageHeading
      :eyebrow="date"
      :title="`${greeting}, Александр 👋`"
      description="Вот что происходит с вашими сообществами ВКонтакте."
    >
      <template #actions>
        <DateRangeButton label="Последние 7 дней" />
        <ConnectCommunityButton
          @connect="showToast('Подключение VK появится вместе с API')"
        />
      </template>
    </PageHeading>

    <MetricGrid :metrics="metrics" />

    <SectionHeading
      title="Аудитория и охваты"
      description="Динамика за последние 7 дней"
    >
      <template #action
        ><NuxtLink class="text-link" to="/tracker"
          >Открыть онлайн-трекер ↗</NuxtLink
        ></template
      >
    </SectionHeading>

    <div class="content-grid">
      <AudienceGrowthPanel :labels="chartLabels" :series="chartSeries" />
      <WeeklyInsightCard />
    </div>

    <SectionHeading
      title="Ваши сообщества"
      description="Быстрый обзор подключённых страниц"
    >
      <template #action
        ><NuxtLink class="text-link" to="/communities"
          >Вся аналитика ↗</NuxtLink
        ></template
      >
    </SectionHeading>
    <CommunityPreviewTable :communities="previewCommunities" />
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Обзор — Monst VK Analytics" });

const { greeting, date } = useDashboardGreeting();
const { metrics, chartLabels, chartSeries, previewCommunities } =
  useDashboardAnalytics();
const { showToast } = useToast();
</script>
