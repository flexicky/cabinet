<template>
  <section class="panel tracker-main-panel">
    <div class="panel-heading">
      <div>
        <h2 class="panel-title">Активные пользователи</h2>
        <p class="panel-subtitle">
          Онлайн в сообществах · демонстрационные данные
        </p>
      </div>
      <TrackerPeriodToggle v-model="selectedRange" :ranges="ranges" />
    </div>
    <ChartLegend :series="series" />
    <AnalyticsChart
      :labels="labels"
      :series="series"
      :height="270"
      aria-label="Динамика онлайн-пользователей в сообществах ВКонтакте"
    />
    <div class="tracker-chart-foot">
      <span>Данные обновляются каждые 5 минут</span
      ><b>Пик активности: {{ peakTime }}</b>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ChartSeries, TrackerRange } from "~/types/analytics";

const props = defineProps<{
  labels: string[];
  ranges: { key: TrackerRange; label: string }[];
  range: TrackerRange;
  series: ChartSeries[];
  peakTime: string;
}>();
const emit = defineEmits<{ "update:range": [value: TrackerRange] }>();
const selectedRange = computed({
  get: () => props.range,
  set: (value: TrackerRange) => emit("update:range", value),
});
</script>

<style scoped>
.chart-legend {
  margin-top: 16px;
}
</style>
