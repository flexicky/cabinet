<template>
  <div class="page-heading">
    <div class="page-heading__copy">
      <div class="page-heading__eyebrow"><i></i>{{ eyebrow }}</div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
    <div v-if="$slots.actions" class="heading-actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description: string }>();
</script>
