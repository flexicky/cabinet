<template>
  <span
    class="community-avatar"
    :class="`community-avatar--${tone}`"
    aria-hidden="true"
    >{{ initial }}</span
  >
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ initial: string; tone?: "blue" | "coral" | "lavender" }>(),
  { tone: "blue" },
);
</script>
