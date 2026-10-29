<template>
  <article class="metric-card">
    <div class="metric-card__top">
      {{ metric.label }}
      <span class="metric-icon" :class="`metric-icon--${metric.tone}`">{{
        metric.icon
      }}</span>
    </div>
    <div class="metric-card__value">
      {{ metric.value }}
      <span v-if="metric.delta" class="metric-card__delta"
        >↗ {{ metric.delta.replace("↗ ", "") }}</span
      >
    </div>
    <div class="metric-card__caption">{{ metric.caption }}</div>
  </article>
</template>

<script setup lang="ts">
import type { Metric } from "~/types/analytics";

defineProps<{ metric: Metric }>();
</script>
