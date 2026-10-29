interface NavigationItem {
  label: string;
  to: string;
  icon: "overview" | "tracker" | "communities";
  live?: boolean;
}

const navigationItems: NavigationItem[] = [
  { label: "Обзор", to: "/", icon: "overview" },
  { label: "Онлайн-трекер", to: "/tracker", icon: "tracker", live: true },
  { label: "Группы и страницы", to: "/communities", icon: "communities" },
];

export function useAppNavigation() {
  const route = useRoute();
  const currentTitle = computed(
    () =>
      navigationItems.find((item) => item.to === route.path)?.label ?? "Обзор",
  );

  return { items: navigationItems, currentTitle };
}
