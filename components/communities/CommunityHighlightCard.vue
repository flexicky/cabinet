<template>
  <article class="panel highlight-card">
    <div class="panel-heading">
      <div>
        <h3 class="panel-title">{{ title }}</h3>
        <p class="panel-subtitle">{{ subtitle }}</p>
      </div>
      <span class="metric-icon" :class="`metric-icon--${tone}`">{{
        icon
      }}</span>
    </div>
    <div class="metric-card__value">
      {{ value }} <span class="metric-card__delta">{{ detail }}</span>
    </div>
    <div class="metric-card__caption">{{ description }}</div>
  </article>
</template>

<script setup lang="ts">
import type { MetricTone } from "~/types/analytics";

defineProps<{
  title: string;
  subtitle: string;
  value: string;
  detail: string;
  description: string;
  icon: string;
  tone: MetricTone;
}>();
</script>
