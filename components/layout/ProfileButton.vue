<template>
  <button class="profile-button" type="button" @click="emit('open')">
    <span class="profile-avatar">А</span>
    <span class="profile-details"
      ><b>Александр</b><small>Профиль и настройки</small></span
    >
    <span class="profile-more" aria-hidden="true">···</span>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{ open: [] }>();
</script>
