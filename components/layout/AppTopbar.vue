<template>
  <header class="topbar">
    <button
      class="mobile-menu"
      type="button"
      :aria-expanded="menuOpen"
      aria-label="Переключить меню"
      @click="emit('toggle-menu')"
    >
      <span></span><span></span>
    </button>
    <div class="breadcrumbs">
      <span>Monst</span><i>/</i><b>{{ title }}</b>
    </div>
    <div class="topbar-actions">
      <span class="data-status"><i></i> Данные обновлены 5 мин назад</span>
      <button
        class="icon-button notification-button"
        type="button"
        aria-label="Уведомления"
        @click="showToast('Новых уведомлений нет')"
      >
        <svg viewBox="0 0 20 20" fill="none">
          <path
            d="M15 7.8a5 5 0 0 0-10 0c0 5-2 5.7-2 6.7h14c0-1-2-1.7-2-6.7ZM8 17h4"
          /></svg
        ><i></i>
      </button>
      <span class="topbar-divider"></span>
      <button
        class="help-link"
        type="button"
        @click="showToast('Центр помощи скоро появится')"
      >
        Помощь <span>↗</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{ title: string; menuOpen: boolean }>();
const emit = defineEmits<{ "toggle-menu": [] }>();
const { showToast } = useToast();
</script>
