import { computed, ref } from "vue";
import type { ChartSeries, TrackerRange } from "~/types/analytics";
import {
  overlapStats,
  trackerChart,
  trackerMetrics,
  trackerRanges,
} from "~/data/vk-mocks";

const communityNames = ["Monst SMM", "Дизайн среда", "Личный блог"];
const communityColors = ["#9b76f6", "#b6d947", "#68a5ed"];

export function useOnlineTracker() {
  const selectedRange = ref<TrackerRange>("day");
  const selectedData = computed(() => trackerChart[selectedRange.value]);

  const chartSeries = computed<ChartSeries[]>(() =>
    selectedData.value.values.map((values, index) => ({
      name: communityNames[index] ?? `Сообщество ${index + 1}`,
      color: communityColors[index] ?? "#9b76f6",
      values,
    })),
  );

  const dateLabel = computed(() => {
    if (selectedRange.value === "week") return "Последние 7 дней";
    if (selectedRange.value === "month") return "Последние 30 дней";
    return `Сегодня, ${new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "short" }).format(new Date())}`;
  });

  const peakTime = computed(() =>
    selectedRange.value === "day"
      ? "20:00"
      : selectedRange.value === "week"
        ? "Чт, 20:00"
        : "Четверг",
  );

  return {
    ranges: trackerRanges,
    selectedRange,
    labels: computed(() => selectedData.value.labels),
    series: chartSeries,
    metrics: trackerMetrics,
    overlaps: overlapStats,
    dateLabel,
    peakTime,
  };
}
