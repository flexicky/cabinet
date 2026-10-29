<template>
  <div class="chart-legend" aria-label="Легенда графика">
    <span v-for="item in series" :key="item.name" class="legend-item">
      <i :style="{ background: item.color }"></i>{{ item.name }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { ChartSeries } from "~/types/analytics";

defineProps<{ series: ChartSeries[] }>();
</script>
