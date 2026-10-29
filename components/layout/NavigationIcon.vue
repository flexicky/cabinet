<template>
  <span class="nav-icon" aria-hidden="true">
    <svg v-if="name === 'overview'" viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="2.5" width="6" height="6" rx="1.4" />
      <rect x="11.5" y="2.5" width="6" height="4" rx="1.4" />
      <rect x="11.5" y="9.5" width="6" height="8" rx="1.4" />
      <rect x="2.5" y="11.5" width="6" height="6" rx="1.4" />
    </svg>
    <svg v-else-if="name === 'tracker'" viewBox="0 0 20 20" fill="none">
      <path d="M2 14.5 6.1 10l3.2 2.8 5.1-6.3 3.6 2.9" />
      <path d="M13.8 6.5h3.8v3.8" />
    </svg>
    <svg v-else viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5 17 6v4.6c0 3.5-2.4 5.7-7 7-4.6-1.3-7-3.5-7-7V6l7-3.5Z" />
      <path d="M7 10h6M10 7v6" />
    </svg>
  </span>
</template>

<script setup lang="ts">
defineProps<{ name: "overview" | "tracker" | "communities" }>();
</script>
