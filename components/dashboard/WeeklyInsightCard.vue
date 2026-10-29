<template>
  <aside class="insight-card">
    <div class="insight-card__eyebrow">✦ Инсайт недели</div>
    <h3>Ваша аудитория растёт быстрее на 18%</h3>
    <p>
      Публикации по вторникам и четвергам получают больше всего новых
      подписчиков.
    </p>
    <div class="insight-card__spark" aria-label="Рост на 18,4%">
      <i v-for="bar in 8" :key="bar"></i><span>+18,4%</span>
    </div>
    <div class="tracker-stats">
      <div><b>2 418</b><span>новых подписчиков</span></div>
      <div><b>4,8%</b><span>средний ER</span></div>
    </div>
  </aside>
</template>
