<template>
  <NuxtLayout>
    <div class="page-heading">
      <div><div class="page-heading__eyebrow"><i></i> ЧЕТВЕРГ, 29 ОКТЯБРЯ 2026</div><h1>Доброе утро, Александр 👋</h1><p>Вот что происходит с вашими сообществами ВКонтакте.</p></div>
      <div class="heading-actions"><button class="date-control" type="button"><svg viewBox="0 0 20 20"><rect x="3" y="4.5" width="14" height="12" rx="2"/><path d="M6.5 2.5v4M13.5 2.5v4M3 8h14"/></svg><b>Последние 7 дней</b><span class="chevron">⌄</span></button><button class="primary-button" type="button" @click="toast = 'Подключение VK появится вместе с API'"><span class="plus">＋</span> Подключить сообщество</button></div>
    </div>

    <section class="metric-grid" aria-label="Сводная статистика">
      <article v-for="metric in metrics" :key="metric.label" class="metric-card"><div class="metric-card__top">{{ metric.label }}<span class="metric-icon" :class="metric.iconClass">{{ metric.icon }}</span></div><div class="metric-card__value">{{ metric.value }} <span class="metric-card__delta">↗ {{ metric.delta }}</span></div><div class="metric-card__caption">{{ metric.caption }}</div></article>
    </section>

    <div class="section-title-row"><div><h2>Аудитория и охваты</h2><p>Динамика за последние 7 дней</p></div><NuxtLink class="text-link" to="/tracker">Открыть онлайн-трекер ↗</NuxtLink></div>
    <div class="content-grid">
      <section class="panel audience-card">
        <div class="panel-heading"><div><h3 class="panel-title">Рост аудитории</h3><p class="panel-subtitle">Сравнение активности по вашим сообществам</p></div><div class="chart-legend"><span class="legend-item"><i class="violet"></i> Monst SMM</span><span class="legend-item"><i class="lime"></i> Дизайн среда</span><span class="legend-item"><i class="blue"></i> Личный блог</span></div></div>
        <AnalyticsChart :labels="chartLabels" :series="overviewSeries" :height="232" aria-label="График прироста аудитории трёх сообществ" />
      </section>
      <aside class="insight-card"><div class="insight-card__eyebrow">✦ ИНСАЙТ НЕДЕЛИ</div><h3>Ваша аудитория растёт быстрее на 18%</h3><p>Публикации по вторникам и четвергам получают больше всего новых подписчиков.</p><div class="insight-card__spark"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><span>+18,4%</span></div><div class="tracker-stats"><div><b>2 418</b><span>новых подписчиков</span></div><div><b>4,8%</b><span>средний ER</span></div></div></aside>
    </div>

    <div class="section-title-row"><div><h2>Ваши сообщества</h2><p>Быстрый обзор подключённых страниц</p></div><NuxtLink class="text-link" to="/communities">Вся аналитика ↗</NuxtLink></div>
    <section class="panel table-wrap"><table class="data-table"><thead><tr><th>СООБЩЕСТВО</th><th>ПОДПИСЧИКИ</th><th>ОХВАТ ЗА НЕДЕЛЮ</th><th>ВОВЛЕЧЁННОСТЬ</th><th>СТАТУС</th></tr></thead><tbody><tr v-for="community in communities.slice(0, 3)" :key="community.name"><td><div class="community-name"><span class="community-avatar" :class="community.avatarClass">{{ community.initial }}</span><span>{{ community.name }}</span></div></td><td>{{ community.followers }}</td><td>{{ community.reach }}</td><td>{{ community.engagement }}</td><td><span class="tag"><i></i> Подключено</span></td></tr></tbody></table></section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const toast = useState<string>('toast', () => '')
const metrics = [
  { label: 'Подписчики', value: '28 492', delta: '8,2%', caption: 'всего в 3 сообществах', icon: '♙', iconClass: 'metric-icon--violet' },
  { label: 'Охват публикаций', value: '164,8K', delta: '12,6%', caption: 'за последние 7 дней', icon: '◉', iconClass: 'metric-icon--lime' },
  { label: 'Вовлечённость', value: '4,82%', delta: '0,8%', caption: 'средний показатель ER', icon: '✳', iconClass: 'metric-icon--pink' },
  { label: 'Сейчас онлайн', value: '1 284', delta: 'в сети', caption: 'пользователей отслеживается', icon: '⌁', iconClass: 'metric-icon--blue' },
]
const chartLabels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const overviewSeries = [
  { name: 'Monst SMM', color: '#9b76f6', values: [32, 44, 41, 68, 56, 83, 95] },
  { name: 'Дизайн среда', color: '#b6d947', values: [47, 38, 58, 49, 74, 70, 90] },
  { name: 'Личный блог', color: '#68a5ed', values: [22, 31, 28, 44, 41, 63, 57] },
]
const communities = [
  { name: 'Monst SMM', initial: 'M', avatarClass: '', followers: '12 840', reach: '84 291', engagement: '5,24%' },
  { name: 'Дизайн среда', initial: 'Д', avatarClass: 'community-avatar--coral', followers: '8 392', reach: '52 814', engagement: '4,86%' },
  { name: 'Александр К.', initial: 'А', avatarClass: 'community-avatar--lavender', followers: '7 260', reach: '27 693', engagement: '4,36%' },
]
</script>
