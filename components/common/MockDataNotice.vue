<template>
  <div
    class="tracker-note"
    :class="{ 'tracker-note--compact': compact }"
    role="note"
  >
    <span aria-hidden="true">ⓘ</span>
    <div>{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ message: string; compact?: boolean }>(), {
  compact: false,
});
</script>
