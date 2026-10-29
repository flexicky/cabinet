<template>
  <section class="panel audience-card">
    <div class="panel-heading">
      <div>
        <h3 class="panel-title">Рост аудитории</h3>
        <p class="panel-subtitle">Сравнение активности по вашим сообществам</p>
      </div>
      <ChartLegend :series="series" />
    </div>
    <AnalyticsChart
      :labels="labels"
      :series="series"
      :height="232"
      aria-label="График прироста аудитории трёх сообществ"
    />
  </section>
</template>

<script setup lang="ts">
import type { ChartSeries } from "~/types/analytics";

defineProps<{ labels: string[]; series: ChartSeries[] }>();
</script>
