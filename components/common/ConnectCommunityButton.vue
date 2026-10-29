<template>
  <button class="primary-button" type="button" @click="emit('connect')">
    <span class="plus">＋</span>{{ label }}
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), {
  label: "Подключить сообщество",
});
const emit = defineEmits<{ connect: [] }>();
</script>
