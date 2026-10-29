<template>
  <section class="communities-summary" aria-label="Сводка по площадкам">
    <article class="summary-box">
      <span>Подключено сообществ</span><b>{{ count }} <small>из 5</small></b>
    </article>
    <article class="summary-box">
      <span>Всего подписчиков</span><b>{{ followers }} <small>↗ 8,2%</small></b>
    </article>
    <article class="summary-box">
      <span>Средний ER</span
      ><b>{{ averageEngagement }} <small>↗ 0,6%</small></b>
    </article>
  </section>
</template>

<script setup lang="ts">
defineProps<{ count: number; followers: string; averageEngagement: string }>();
</script>
