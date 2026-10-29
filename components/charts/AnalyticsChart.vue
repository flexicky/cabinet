<template>
  <div class="chart-wrap" @mouseleave="activeIndex = -1">
    <div
      v-if="activeIndex >= 0"
      class="chart-tooltip"
      :style="tooltipStyle"
      role="status"
    >
      <b>{{ labels[activeIndex] }}</b>
      <span v-for="line in series" :key="line.name">
        <i :style="{ background: line.color }"></i>{{ line.name }}
        <strong>{{ line.values[activeIndex] }}</strong>
      </span>
    </div>

    <svg
      class="chart-svg"
      :style="{ height: `${height}px` }"
      viewBox="0 0 700 240"
      preserveAspectRatio="none"
      role="img"
      :aria-label="ariaLabel"
      @mousemove="onPointerMove"
    >
      <defs>
        <linearGradient
          v-for="(line, index) in series"
          :id="gradientId(index)"
          :key="gradientId(index)"
          x1="0"
          x2="0"
          y1="0"
          y2="1"
        >
          <stop offset="0%" :stop-color="line.color" stop-opacity=".2" />
          <stop offset="100%" :stop-color="line.color" stop-opacity="0" />
        </linearGradient>
      </defs>

      <g v-for="tick in 4" :key="`grid-${tick}`">
        <line
          class="grid-line"
          x1="42"
          :y1="tickY(tick - 1)"
          x2="690"
          :y2="tickY(tick - 1)"
        />
        <text class="axis-label" x="0" :y="tickY(tick - 1) + 3">
          {{ yLabel(tick - 1) }}
        </text>
      </g>

      <g v-for="(label, index) in labels" :key="`${label}-${index}`">
        <text
          v-if="shouldShowLabel(index)"
          class="axis-label"
          :x="x(index)"
          y="232"
          text-anchor="middle"
        >
          {{ label }}
        </text>
      </g>

      <g v-for="(line, index) in series" :key="line.name">
        <path
          class="chart-area"
          :d="areaPath(line.values)"
          :fill="`url(#${gradientId(index)})`"
        />
        <path
          class="chart-line"
          :d="linePath(line.values)"
          :stroke="line.color"
        />
        <circle
          v-if="activeIndex >= 0"
          class="chart-dot"
          :cx="x(activeIndex)"
          :cy="y(line.values[activeIndex] ?? 0)"
          r="4"
          :fill="line.color"
        />
      </g>

      <line
        v-if="activeIndex >= 0"
        class="chart-cursor"
        :x1="x(activeIndex)"
        y1="12"
        :x2="x(activeIndex)"
        y2="210"
      />
      <rect
        class="chart-hit"
        x="42"
        y="10"
        width="648"
        height="200"
        @mousemove.stop="onPlotMove"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import type { ChartSeries } from "~/types/analytics";

const props = withDefaults(
  defineProps<{
    labels: string[];
    series: ChartSeries[];
    height?: number;
    ariaLabel?: string;
  }>(),
  {
    height: 220,
    ariaLabel: "График аналитики",
  },
);

const chartId = useId().replace(/[^a-zA-Z0-9]/g, "");
const activeIndex = ref(-1);
const labelStep = computed(() =>
  Math.max(1, Math.ceil(props.labels.length / 7)),
);
const maxValue = computed(
  () => Math.max(1, ...props.series.flatMap((line) => line.values)) * 1.16,
);

function x(index: number) {
  const lastIndex = Math.max(1, props.labels.length - 1);
  return 42 + (648 * index) / lastIndex;
}

function y(value: number) {
  return 210 - (value / maxValue.value) * 185;
}

function tickY(index: number) {
  return 25 + index * 55;
}

function yLabel(index: number) {
  return Math.round((maxValue.value * (3 - index)) / 3);
}

function shouldShowLabel(index: number) {
  return index % labelStep.value === 0 || index === props.labels.length - 1;
}

function gradientId(index: number) {
  return `chart-fill-${chartId}-${index}`;
}

function linePath(values: number[]) {
  return values
    .map((value, index) => `${index === 0 ? "M" : "L"} ${x(index)} ${y(value)}`)
    .join(" ");
}

function areaPath(values: number[]) {
  return `${linePath(values)} L ${x(values.length - 1)} 210 L ${x(0)} 210 Z`;
}

const tooltipStyle = computed(() => ({
  left: `${Math.min(80, Math.max(12, (x(activeIndex.value) / 700) * 100))}%`,
  top: "5px",
}));

function updateActiveIndex(clientX: number, svg: SVGSVGElement) {
  if (!props.labels.length) return;
  const bounds = svg.getBoundingClientRect();
  if (!bounds.width) return;

  const plotX = ((clientX - bounds.left) / bounds.width) * 700;
  const normalizedX = Math.max(0, Math.min(1, (plotX - 42) / 648));
  activeIndex.value = Math.round(normalizedX * (props.labels.length - 1));
}

function onPointerMove(event: MouseEvent) {
  updateActiveIndex(event.clientX, event.currentTarget as SVGSVGElement);
}

function onPlotMove(event: MouseEvent) {
  const svg = (event.currentTarget as SVGRectElement).ownerSVGElement;
  if (svg) updateActiveIndex(event.clientX, svg);
}
</script>
