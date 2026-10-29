import type {
  ChartSeries,
  Metric,
  TrackerRange,
  VkCommunity,
} from "~/types/analytics";

export const overviewMetrics: Metric[] = [
  {
    label: "Подписчики",
    value: "28 492",
    delta: "8,2%",
    caption: "всего в 3 сообществах",
    icon: "♙",
    tone: "violet",
  },
  {
    label: "Охват публикаций",
    value: "164,8K",
    delta: "12,6%",
    caption: "за последние 7 дней",
    icon: "◉",
    tone: "lime",
  },
  {
    label: "Вовлечённость",
    value: "4,82%",
    delta: "0,8%",
    caption: "средний показатель ER",
    icon: "✳",
    tone: "pink",
  },
  {
    label: "Сейчас онлайн",
    value: "1 284",
    delta: "в сети",
    caption: "пользователей отслеживается",
    icon: "⌁",
    tone: "blue",
  },
];

export const communities: VkCommunity[] = [
  {
    id: "monst-smm",
    name: "Monst SMM",
    initial: "M",
    avatarTone: "blue",
    type: "Группа",
    slug: "monst_smm",
    followers: 12840,
    growth: "8,4%",
    reach: 84291,
    engagement: 5.24,
    posts: 18,
  },
  {
    id: "design-sreda",
    name: "Дизайн среда",
    initial: "Д",
    avatarTone: "coral",
    type: "Группа",
    slug: "designsreda",
    followers: 8392,
    growth: "12,4%",
    reach: 52814,
    engagement: 4.86,
    posts: 14,
  },
  {
    id: "alexander-k",
    name: "Александр К.",
    initial: "А",
    avatarTone: "lavender",
    type: "Страница",
    slug: "alexanderk",
    followers: 7260,
    growth: "4,2%",
    reach: 27693,
    engagement: 4.36,
    posts: 9,
  },
];

export const overviewChartLabels = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export const overviewChartSeries: ChartSeries[] = [
  { name: "Monst SMM", color: "#9b76f6", values: [32, 44, 41, 68, 56, 83, 95] },
  {
    name: "Дизайн среда",
    color: "#b6d947",
    values: [47, 38, 58, 49, 74, 70, 90],
  },
  {
    name: "Личный блог",
    color: "#68a5ed",
    values: [22, 31, 28, 44, 41, 63, 57],
  },
];

export const trackerRanges: { key: TrackerRange; label: string }[] = [
  { key: "day", label: "24 часа" },
  { key: "week", label: "7 дней" },
  { key: "month", label: "30 дней" },
];

export const trackerMetrics: Metric[] = [
  {
    label: "Сейчас онлайн",
    value: "1 284",
    delta: "↗ 12,8%",
    caption: "пользователей в 3 сообществах",
    icon: "⌁",
    tone: "blue",
  },
  {
    label: "Пик за сегодня",
    value: "2 046",
    caption: "зафиксирован в 20:00",
    icon: "↗",
    tone: "lime",
  },
  {
    label: "Общие подписчики",
    value: "3 812",
    delta: "31,6%",
    caption: "аудитория пересекается",
    icon: "◎",
    tone: "violet",
  },
];

export const trackerChart: Record<
  TrackerRange,
  { labels: string[]; values: number[][] }
> = {
  day: {
    labels: [
      "00:00",
      "02:00",
      "04:00",
      "06:00",
      "08:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
    ],
    values: [
      [18, 14, 12, 20, 46, 70, 66, 58, 72, 91, 100, 78],
      [24, 18, 17, 25, 40, 54, 76, 63, 57, 72, 86, 80],
      [10, 8, 12, 18, 31, 45, 58, 67, 53, 61, 72, 49],
    ],
  },
  week: {
    labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    values: [
      [35, 55, 49, 72, 62, 91, 81],
      [50, 42, 68, 61, 83, 74, 94],
      [22, 33, 29, 50, 46, 69, 61],
    ],
  },
  month: {
    labels: [
      "1 окт",
      "4 окт",
      "7 окт",
      "10 окт",
      "13 окт",
      "16 окт",
      "19 окт",
      "22 окт",
      "25 окт",
      "29 окт",
    ],
    values: [
      [24, 33, 30, 48, 44, 61, 56, 79, 70, 96],
      [33, 28, 49, 43, 65, 56, 74, 68, 89, 81],
      [16, 22, 27, 31, 40, 39, 51, 47, 63, 57],
    ],
  },
};

export const overlapStats = [
  {
    label: "Monst SMM + Дизайн среда",
    marks: ["M", "Д"],
    active: "842",
    percent: "18,4%",
  },
  {
    label: "Monst SMM + Личный блог",
    marks: ["M", "А"],
    active: "516",
    percent: "12,1%",
  },
  {
    label: "Все три сообщества",
    marks: ["M", "Д", "А"],
    active: "238",
    percent: "6,8%",
  },
];
