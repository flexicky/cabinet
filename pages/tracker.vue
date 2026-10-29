<template>
  <NuxtLayout>
    <div class="page-heading">
      <div><div class="page-heading__eyebrow"><i></i> VK · АКТИВНОСТЬ АУДИТОРИИ</div><h1>Онлайн-трекер</h1><p>Смотрите, когда ваша аудитория активна и пересекается между сообществами.</p></div>
      <div class="heading-actions"><span class="tracker-live"><i></i> Трекер активен</span><button class="date-control" type="button"><svg viewBox="0 0 20 20"><rect x="3" y="4.5" width="14" height="12" rx="2"/><path d="M6.5 2.5v4M13.5 2.5v4M3 8h14"/></svg><b>{{ rangeLabel }}</b><span class="chevron">⌄</span></button></div>
    </div>

    <section class="tracker-metric-grid">
      <article v-for="metric in trackerMetrics" :key="metric.label" class="metric-card"><div class="metric-card__top">{{ metric.label }}<span class="metric-icon" :class="metric.iconClass">{{ metric.icon }}</span></div><div class="metric-card__value">{{ metric.value }} <span v-if="metric.delta" class="metric-card__delta">{{ metric.delta }}</span></div><div class="metric-card__caption">{{ metric.caption }}</div></article>
    </section>

    <div class="content-grid">
      <section class="panel tracker-main-panel">
        <div class="panel-heading"><div><h2 class="panel-title">Активные пользователи</h2><p class="panel-subtitle">Онлайн в сообществах в течение дня · демо-данные</p></div><div class="tracker-controls" aria-label="Период графика"><button v-for="option in ranges" :key="option.key" type="button" :class="{ active: selectedRange === option.key }" @click="selectedRange = option.key">{{ option.label }}</button></div></div>
        <div class="chart-legend" style="margin-top:16px"><span v-for="item in activeSeries" :key="item.name" class="legend-item"><i :style="{ background: item.color }"></i>{{ item.name }}</span></div>
        <AnalyticsChart :labels="activeLabels" :series="activeSeries" :height="270" aria-label="Динамика онлайн-пользователей в сообществах ВКонтакте" />
        <div class="tracker-chart-foot"><span>Показатели обновляются каждые 5 минут</span><b>Пик активности: {{ peakTime }}</b></div>
      </section>
      <section class="panel overlap-panel"><div class="panel-heading"><div><h2 class="panel-title">Пересечения аудитории</h2><p class="panel-subtitle">Пользователи, общие для сообществ</p></div><span class="metric-icon metric-icon--violet">◎</span></div>
        <div class="overlap-list"><div v-for="(overlap, index) in overlaps" :key="overlap.label" class="overlap-row"><div class="overlap-avatars"><i v-for="mark in overlap.marks" :key="mark">{{ mark }}</i></div><div class="overlap-info"><b>{{ overlap.label }}</b><span>{{ overlap.active }} сейчас онлайн</span></div><div class="overlap-value">{{ overlap.percent }}<small>пересечение</small></div></div></div>
        <div class="quality-row"><span>Охват общей аудитории</span><b>31,6%</b></div><div class="tracker-note"><span>✦</span><div><b>Умная подсказка</b> — публикация сразу в двух сообществах может увеличить общий охват на 22%.</div></div>
      </section>
    </div>
    <div class="tracker-note" style="margin-top:14px"><span>ⓘ</span><div>Пока это демонстрационные данные. График и пересечения будут подключены к API бэкенда на следующем этапе.</div></div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const ranges = [{ key: 'day', label: '24 часа' }, { key: 'week', label: '7 дней' }, { key: 'month', label: '30 дней' }]
const selectedRange = ref('day')
const rangeLabel = computed(() => selectedRange.value === 'day' ? 'Сегодня, 29 окт' : selectedRange.value === 'week' ? 'Последние 7 дней' : 'Последние 30 дней')
const peakTime = computed(() => selectedRange.value === 'day' ? '20:00' : selectedRange.value === 'week' ? 'Чт, 20:00' : 'Четверг')
const trackerMetrics = [
  { label: 'Сейчас онлайн', value: '1 284', delta: '↗ 12,8%', caption: 'пользователей в 3 сообществах', icon: '⌁', iconClass: 'metric-icon--blue' },
  { label: 'Пик за сегодня', value: '2 046', delta: '', caption: 'зафиксирован в 20:00', icon: '↗', iconClass: 'metric-icon--lime' },
  { label: 'Общие подписчики', value: '3 812', delta: '31,6%', caption: 'аудитория пересекается', icon: '◎', iconClass: 'metric-icon--violet' },
]
const data = {
  day: { labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'], values: [[18, 14, 12, 20, 46, 70, 66, 58, 72, 91, 100, 78], [24, 18, 17, 25, 40, 54, 76, 63, 57, 72, 86, 80], [10, 8, 12, 18, 31, 45, 58, 67, 53, 61, 72, 49]] },
  week: { labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], values: [[35, 55, 49, 72, 62, 91, 81], [50, 42, 68, 61, 83, 74, 94], [22, 33, 29, 50, 46, 69, 61]] },
  month: { labels: ['1 окт', '4 окт', '7 окт', '10 окт', '13 окт', '16 окт', '19 окт', '22 окт', '25 окт', '29 окт'], values: [[24, 33, 30, 48, 44, 61, 56, 79, 70, 96], [33, 28, 49, 43, 65, 56, 74, 68, 89, 81], [16, 22, 27, 31, 40, 39, 51, 47, 63, 57]] },
}
const names = ['Monst SMM', 'Дизайн среда', 'Личный блог']
const colors = ['#9b76f6', '#b6d947', '#68a5ed']
const currentData = computed(() => data[selectedRange.value as keyof typeof data])
const activeLabels = computed(() => currentData.value.labels)
const activeSeries = computed(() => names.map((name, index) => ({ name, color: colors[index] as string, values: currentData.value.values[index] as number[] })))
const overlaps = [
  { label: 'Monst SMM + Дизайн среда', marks: ['M', 'Д'], active: '842', percent: '18,4%' },
  { label: 'Monst SMM + Личный блог', marks: ['M', 'А'], active: '516', percent: '12,1%' },
  { label: 'Все три сообщества', marks: ['M', 'Д', 'А'], active: '238', percent: '6,8%' },
]
</script>
