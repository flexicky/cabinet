<template>
  <section
    class="metric-grid"
    :class="`metric-grid--${columns}`"
    :aria-label="label"
  >
    <MetricCard
      v-for="metric in metrics"
      :key="metric.label"
      :metric="metric"
    />
  </section>
</template>

<script setup lang="ts">
import type { Metric } from "~/types/analytics";

withDefaults(
  defineProps<{ metrics: Metric[]; label?: string; columns?: 3 | 4 }>(),
  {
    label: "Сводная статистика",
    columns: 4,
  },
);
</script>
