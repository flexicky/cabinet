<template>
  <NuxtLayout>
    <div class="page-heading">
      <div><div class="page-heading__eyebrow"><i></i> VK · АНАЛИТИКА СООБЩЕСТВ</div><h1>Группы и страницы</h1><p>Отслеживайте рост, охваты и вовлечённость ваших площадок.</p></div>
      <div class="heading-actions"><button class="primary-button" type="button" @click="toast = 'Подключение VK появится вместе с API'"><span class="plus">＋</span> Подключить сообщество</button></div>
    </div>

    <section class="communities-summary"><div class="summary-box"><span>Подключено сообществ</span><b>3 <small>из 5</small></b></div><div class="summary-box"><span>Всего подписчиков</span><b>28 492 <small>↗ 8,2%</small></b></div><div class="summary-box"><span>Средний ER</span><b>4,82% <small>↗ 0,6%</small></b></div></section>

    <div class="panel" style="padding:17px 17px 0">
      <div class="panel-heading" style="margin-bottom:12px"><div><h2 class="panel-title">Все площадки</h2><p class="panel-subtitle">Статистика обновлена сегодня в 14:32</p></div><div class="filters-row"><label class="search-box"><svg viewBox="0 0 20 20"><circle cx="8.5" cy="8.5" r="5.5"/><path d="m13 13 4 4"/></svg><input v-model="search" type="search" placeholder="Найти сообщество" aria-label="Найти сообщество"></label><select v-model="sort" class="sort-select" aria-label="Сортировка"><option value="followers">По подписчикам</option><option value="reach">По охвату</option><option value="engagement">По вовлечённости</option></select></div></div>
      <div class="table-wrap community-table"><table class="data-table"><thead><tr><th>СООБЩЕСТВО</th><th>ПОДПИСЧИКИ</th><th>РОСТ</th><th>ОХВАТ / 7 ДНЕЙ</th><th>СРЕДНИЙ ER</th><th>ПУБЛИКАЦИИ</th><th>СТАТУС</th><th></th></tr></thead><tbody><tr v-for="community in visibleCommunities" :key="community.name"><td><div class="community-name"><span class="community-avatar" :class="community.avatarClass">{{ community.initial }}</span><span>{{ community.name }}<small class="community-profile-meta">{{ community.type }} · vk.com/{{ community.slug }}</small></span></div></td><td class="followers-cell">{{ community.followers }}</td><td class="trend-up">↗ {{ community.growth }}</td><td>{{ community.reach }}</td><td><div class="engagement">{{ community.engagement }}<span class="engagement-track"><i :style="{ width: `${community.erWidth}%` }"></i></span></div></td><td>{{ community.posts }}</td><td><span class="tag"><i></i> Активно</span></td><td><button class="text-link" type="button" @click="toast = `Детальная карточка «${community.name}» появится с API`">···</button></td></tr><tr v-if="visibleCommunities.length === 0"><td colspan="8" class="empty-state">Сообщества не найдены. Попробуйте изменить запрос.</td></tr></tbody></table></div>
    </div>

    <div class="section-title-row"><div><h2>На что обратить внимание</h2><p>Короткие подсказки по эффективности площадок</p></div></div>
    <div class="content-grid"><article class="panel" style="padding:17px"><div class="panel-heading"><div><h3 class="panel-title">Лучший рост</h3><p class="panel-subtitle">За последние 7 дней</p></div><span class="metric-icon metric-icon--lime">↗</span></div><div class="metric-card__value" style="margin-top:14px">+12,4% <span class="metric-card__delta">Дизайн среда</span></div><div class="metric-card__caption">Больше всего новых подписчиков среди ваших страниц</div></article><article class="panel" style="padding:17px"><div class="panel-heading"><div><h3 class="panel-title">Лучшее вовлечение</h3><p class="panel-subtitle">Средний показатель ER</p></div><span class="metric-icon metric-icon--violet">✳</span></div><div class="metric-card__value" style="margin-top:14px">5,24% <span class="metric-card__delta">Monst SMM</span></div><div class="metric-card__caption">На 0,42% выше среднего по вашим сообществам</div></article></div>
    <div class="tracker-note" style="margin-top:14px"><span>ⓘ</span><div>Показатели на странице — демонстрационные. Подключение реальных данных ВКонтакте будет добавлено после готовности API.</div></div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const search = ref('')
const sort = ref('followers')
const toast = useState<string>('toast', () => '')
const communities = [
  { name: 'Monst SMM', initial: 'M', avatarClass: '', type: 'Группа', slug: 'monst_smm', followers: 12840, growth: '8,4%', reach: '84 291', reachValue: 84291, engagement: '5,24%', erValue: 5.24, erWidth: 84, posts: 18 },
  { name: 'Дизайн среда', initial: 'Д', avatarClass: 'community-avatar--coral', type: 'Группа', slug: 'designsreda', followers: 8392, growth: '12,4%', reach: '52 814', reachValue: 52814, engagement: '4,86%', erValue: 4.86, erWidth: 72, posts: 14 },
  { name: 'Александр К.', initial: 'А', avatarClass: 'community-avatar--lavender', type: 'Страница', slug: 'alexanderk', followers: 7260, growth: '4,2%', reach: '27 693', reachValue: 27693, engagement: '4,36%', erValue: 4.36, erWidth: 65, posts: 9 },
]
const visibleCommunities = computed(() => communities.filter((community) => community.name.toLocaleLowerCase('ru').includes(search.value.toLocaleLowerCase('ru')) || community.slug.includes(search.value.toLowerCase())).sort((a, b) => sort.value === 'reach' ? b.reachValue - a.reachValue : sort.value === 'engagement' ? b.erValue - a.erValue : b.followers - a.followers).map((community) => ({ ...community, followers: community.followers.toLocaleString('ru-RU') })))
watch(toast, (value: string) => { if (value) setTimeout(() => { toast.value = '' }, 3200) })
</script>
