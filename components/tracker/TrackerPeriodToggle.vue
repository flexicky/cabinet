<template>
  <div class="tracker-controls" role="group" aria-label="Период графика">
    <button
      v-for="range in ranges"
      :key="range.key"
      type="button"
      :class="{ active: modelValue === range.key }"
      :aria-pressed="modelValue === range.key"
      @click="emit('update:modelValue', range.key)"
    >
      {{ range.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { TrackerRange } from "~/types/analytics";

defineProps<{
  modelValue: TrackerRange;
  ranges: { key: TrackerRange; label: string }[];
}>();
const emit = defineEmits<{ "update:modelValue": [value: TrackerRange] }>();
</script>
