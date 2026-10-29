<template>
  <button
    class="date-control"
    type="button"
    :aria-label="`Выбран период: ${label}`"
    @click="emit('click')"
  >
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="3" y="4.5" width="14" height="12" rx="2" />
      <path d="M6.5 2.5v4M13.5 2.5v4M3 8h14" />
    </svg>
    <b>{{ label }}</b>
    <span class="chevron" aria-hidden="true">⌄</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();
const emit = defineEmits<{ click: [] }>();
</script>
