<template>
  <Transition name="sidebar">
    <aside
      v-if="open || !isMobile"
      class="sidebar"
      :class="{ 'sidebar--open': open }"
      aria-label="Боковая панель"
    >
      <NuxtLink
        class="brand"
        to="/"
        aria-label="Monst — на главную"
        @click="emit('navigate')"
      >
        <span class="brand__mark" aria-hidden="true"
          ><span></span><span></span><span></span
        ></span>
        <span class="brand__name">monst<span>.</span></span>
      </NuxtLink>

      <WorkspaceSwitcher />
      <p class="sidebar-label">Рабочее пространство</p>
      <nav class="side-nav" aria-label="Главная навигация">
        <NuxtLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :exact-active-class="item.to === '/' ? 'nav-link--active' : undefined"
          active-class="nav-link--active"
          @click="emit('navigate')"
        >
          <NavigationIcon :name="item.icon" />
          <span>{{ item.label }}</span>
          <i v-if="item.live" class="nav-live" aria-label="Активен"></i>
        </NuxtLink>
      </nav>

      <p class="sidebar-label sidebar-label--social">Подключённые сети</p>
      <div class="network-row">
        <VkLogo /><span>ВКонтакте</span
        ><span class="network-status" aria-label="Подключено"></span>
      </div>
      <button
        class="network-add"
        type="button"
        @click="showToast('Подключение VK появится вместе с API')"
      >
        ＋ <span>Добавить соцсеть</span>
      </button>

      <div class="sidebar-bottom">
        <PlanCard @upgrade="showToast('Тарифы скоро будут доступны')" />
        <ProfileButton @open="showToast('Настройки профиля скоро появятся')" />
      </div>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

withDefaults(defineProps<{ open?: boolean }>(), { open: false });
const emit = defineEmits<{ navigate: [] }>();
const { items } = useAppNavigation();
const { showToast } = useToast();
const isMobile = ref(false);
let mediaQuery: MediaQueryList | undefined;

function updateViewport() {
  isMobile.value = mediaQuery?.matches ?? false;
}

onMounted(() => {
  mediaQuery = window.matchMedia("(max-width: 820px)");
  updateViewport();
  mediaQuery.addEventListener("change", updateViewport);
});
onUnmounted(() => mediaQuery?.removeEventListener("change", updateViewport));
</script>
