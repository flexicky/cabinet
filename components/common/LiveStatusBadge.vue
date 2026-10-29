<template>
  <span class="tracker-live"><i></i>{{ label }}</span>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();
</script>
