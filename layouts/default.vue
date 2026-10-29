<template>
  <div class="app-frame">
    <aside class="sidebar" :class="{ 'sidebar--open': menuOpen }">
      <NuxtLink class="brand" to="/" aria-label="Monst — на главную">
        <span class="brand__mark"><span></span><span></span><span></span></span>
        <span class="brand__name">monst<span>.</span></span>
      </NuxtLink>

      <div class="workspace-switcher">
        <div class="workspace-avatar">M</div>
        <div class="workspace-copy"><b>Мой кабинет</b><span>Личный workspace</span></div>
        <span class="switcher-chevron">⌄</span>
      </div>

      <div class="sidebar-label">РАБОЧЕЕ ПРОСТРАНСТВО</div>
      <nav class="side-nav" aria-label="Главная навигация">
        <NuxtLink to="/" class="nav-link" exact-active-class="nav-link--active">
          <span class="nav-icon"><svg viewBox="0 0 20 20" fill="none"><rect x="2.5" y="2.5" width="6" height="6" rx="1.4"/><rect x="11.5" y="2.5" width="6" height="4" rx="1.4"/><rect x="11.5" y="9.5" width="6" height="8" rx="1.4"/><rect x="2.5" y="11.5" width="6" height="6" rx="1.4"/></svg></span>
          <span>Обзор</span>
        </NuxtLink>
        <NuxtLink to="/tracker" class="nav-link" active-class="nav-link--active">
          <span class="nav-icon"><svg viewBox="0 0 20 20" fill="none"><path d="M2 14.5 6.1 10l3.2 2.8 5.1-6.3 3.6 2.9"/><path d="M13.8 6.5h3.8v3.8"/></svg></span>
          <span>Онлайн-трекер</span><i class="nav-live"></i>
        </NuxtLink>
        <NuxtLink to="/communities" class="nav-link" active-class="nav-link--active">
          <span class="nav-icon"><svg viewBox="0 0 20 20" fill="none"><path d="M10 2.5 17 6v4.6c0 3.5-2.4 5.7-7 7-4.6-1.3-7-3.5-7-7V6l7-3.5Z"/><path d="M7 10h6M10 7v6"/></svg></span>
          <span>Группы и страницы</span>
        </NuxtLink>
      </nav>

      <div class="sidebar-label sidebar-label--social">ПОДКЛЮЧЕННЫЕ СЕТИ</div>
      <div class="network-row"><span class="vk-mark">ᴠκ</span><span>ВКонтакте</span><span class="network-status"></span></div>
      <button class="network-add" type="button" @click="toast = 'Подключение VK появится вместе с API'">＋ <span>Добавить соцсеть</span></button>

      <div class="sidebar-bottom">
        <div class="plan-card"><div class="plan-card__top"><span>ВАШ ПЛАН</span><span class="plan-dot"></span></div><b>Стартовый</b><div class="plan-meter"><span></span></div><small>Использовано 3 из 5 проектов</small><button type="button" @click="toast = 'Тарифы скоро будут доступны'">Улучшить план <span>↗</span></button></div>
        <button class="profile-button" type="button" @click="toast = 'Настройки профиля скоро появятся'"><span class="profile-avatar">А</span><span class="profile-details"><b>Александр</b><small>Профиль и настройки</small></span><span class="profile-more">···</span></button>
      </div>
    </aside>

    <div v-if="menuOpen" class="mobile-scrim" @click="menuOpen = false"></div>
    <section class="main-shell">
      <header class="topbar">
        <button class="mobile-menu" type="button" aria-label="Открыть меню" @click="menuOpen = !menuOpen"><span></span><span></span></button>
        <div class="breadcrumbs"><span>Monst</span><i>/</i><b>{{ currentSection }}</b></div>
        <div class="topbar-actions">
          <span class="data-status"><i></i> Данные обновлены 5 мин назад</span>
          <button class="icon-button notification-button" type="button" aria-label="Уведомления" @click="toast = 'Новых уведомлений нет'"><svg viewBox="0 0 20 20" fill="none"><path d="M15 7.8a5 5 0 0 0-10 0c0 5-2 5.7-2 6.7h14c0-1-2-1.7-2-6.7ZM8 17h4"/></svg><i></i></button>
          <span class="topbar-divider"></span>
          <button class="help-link" type="button" @click="toast = 'Центр помощи скоро появится'">Помощь <span>↗</span></button>
        </div>
      </header>
      <main class="page-content"><slot /></main>
      <Transition name="toast"><div v-if="toast" class="toast-message" role="status">{{ toast }}<button type="button" aria-label="Закрыть" @click="toast = ''">×</button></div></Transition>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)
const toast = useState<string>('toast', () => '')
const currentSection = computed(() => route.path === '/tracker' ? 'Онлайн-трекер' : route.path === '/communities' ? 'Группы и страницы' : 'Обзор')
watch(toast, (value: string) => { if (value) setTimeout(() => { toast.value = '' }, 3200) })
watch(() => route.path, () => { menuOpen.value = false })
</script>
