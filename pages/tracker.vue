<template>
  <div>
    <PageHeading
      eyebrow="VK · Активность аудитории"
      title="Онлайн-трекер"
      description="Смотрите, когда ваша аудитория активна и пересекается между сообществами."
    >
      <template #actions>
        <LiveStatusBadge label="Трекер активен" />
        <DateRangeButton :label="dateLabel" />
      </template>
    </PageHeading>

    <MetricGrid
      :metrics="metrics"
      label="Показатели онлайн-трекера"
      :columns="3"
    />

    <div class="content-grid tracker-content-grid">
      <OnlineTrackerChartPanel
        v-model:range="selectedRange"
        :ranges="ranges"
        :labels="labels"
        :series="series"
        :peak-time="peakTime"
      />
      <AudienceOverlapPanel :overlaps="overlaps" />
    </div>

    <MockDataNotice
      message="Пока это демонстрационные данные. График активности и пересечения аудитории будут подключены к API бэкенда отдельным этапом."
      compact
    />
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Онлайн-трекер — Monst VK Analytics" });

const {
  ranges,
  selectedRange,
  labels,
  series,
  metrics,
  overlaps,
  dateLabel,
  peakTime,
} = useOnlineTracker();
</script>
