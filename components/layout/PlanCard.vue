<template>
  <section class="plan-card" aria-label="Текущий тариф">
    <div class="plan-card__top">
      <span>Ваш план</span><span class="plan-dot"></span>
    </div>
    <b>Стартовый</b>
    <div
      class="plan-meter"
      role="progressbar"
      aria-label="Использовано проектов"
      aria-valuemin="0"
      aria-valuemax="5"
      aria-valuenow="3"
    >
      <span></span>
    </div>
    <small>Использовано 3 из 5 проектов</small>
    <button type="button" @click="emit('upgrade')">
      Улучшить план <span>↗</span>
    </button>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits<{ upgrade: [] }>();
</script>
