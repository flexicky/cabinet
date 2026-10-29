<template>
  <button class="workspace-switcher" type="button" @click="emit('select')">
    <span class="workspace-avatar">M</span>
    <span class="workspace-copy"
      ><b>Мой кабинет</b><small>Личный workspace</small></span
    >
    <span class="switcher-chevron" aria-hidden="true">⌄</span>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{ select: [] }>();
</script>
