<template>
  <div class="app-frame">
    <AppSidebar :open="menuOpen" @navigate="closeMenu" />
    <button
      v-if="menuOpen"
      class="mobile-scrim"
      type="button"
      aria-label="Закрыть меню"
      @click="closeMenu"
    ></button>

    <section class="main-shell">
      <AppTopbar
        :title="currentTitle"
        :menu-open="menuOpen"
        @toggle-menu="menuOpen = !menuOpen"
      />
      <main class="page-content"><slot /></main>
      <AppToast />
    </section>
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false);
const route = useRoute();
const { currentTitle } = useAppNavigation();

function closeMenu() {
  menuOpen.value = false;
}

watch(() => route.path, closeMenu);
</script>
