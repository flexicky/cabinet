<template>
  <div class="chart-wrap" @mouseleave="activeIndex = -1">
    <div v-if="activeIndex >= 0" class="chart-tooltip" :style="tooltipStyle">
      <b>{{ labels[activeIndex] }}</b>
      <span v-for="(line, lineIndex) in series" :key="line.name"><i :style="{ background: line.color }"></i>{{ line.name }} <strong>{{ line.values[activeIndex] }}</strong></span>
    </div>
    <svg class="chart-svg" :style="{ height: `${height}px` }" viewBox="0 0 700 240" preserveAspectRatio="none" role="img" :aria-label="ariaLabel" @mousemove="onMove">
      <defs>
        <linearGradient v-for="(line, index) in series" :id="`chart-fill-${uid}-${index}`" :key="`gradient-${index}`" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" :stop-color="line.color" stop-opacity=".2"/><stop offset="100%" :stop-color="line.color" stop-opacity="0"/></linearGradient>
      </defs>
      <g v-for="tick in 4" :key="`grid-${tick}`"><line class="grid-line" x1="42" :y1="tickY(tick - 1)" x2="690" :y2="tickY(tick - 1)"/><text class="axis-label" x="0" :y="tickY(tick - 1) + 3">{{ yLabel(tick - 1) }}</text></g>
      <g v-for="(label, index) in labels" :key="label"><text v-if="index % labelStep === 0 || index === labels.length - 1" class="axis-label" :x="x(index)" y="232" text-anchor="middle">{{ label }}</text></g>
      <g v-for="(line, index) in series" :key="line.name">
        <path class="chart-area" :d="area(line.values)" :fill="`url(#chart-fill-${uid}-${index})`"/>
        <path class="chart-line" :d="path(line.values)" :stroke="line.color"/>
        <circle v-if="activeIndex >= 0" class="chart-dot" :cx="x(activeIndex)" :cy="y(line.values[activeIndex])" r="4" :fill="line.color"/>
      </g>
      <line v-if="activeIndex >= 0" class="chart-cursor" :x1="x(activeIndex)" y1="12" :x2="x(activeIndex)" y2="210"/>
      <rect class="chart-hit" x="42" y="10" width="648" height="200" @mousemove.stop="onHit"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  labels: string[]
  series: { name: string; color: string; values: number[] }[]
  height?: number
  ariaLabel?: string
}>(), { height: 220, ariaLabel: 'График аналитики' })
const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
const activeIndex = ref(-1)
const labelStep = computed(() => Math.max(1, Math.ceil(props.labels.length / 7)))
const maxValue = computed(() => Math.max(1, ...props.series.flatMap((line) => line.values)) * 1.16)
const x = (index: number) => 42 + (props.labels.length <= 1 ? 0 : (648 * index) / (props.labels.length - 1))
const y = (value: number) => 210 - (value / maxValue.value) * 185
const tickY = (index: number) => 25 + index * 55
const yLabel = (index: number) => Math.round((maxValue.value * (3 - index)) / 3)
const coords = (values: number[]) => values.map((value, index) => `${index === 0 ? 'M' : 'L'} ${x(index)} ${y(value)}`).join(' ')
const path = (values: number[]) => coords(values)
const area = (values: number[]) => `${coords(values)} L ${x(values.length - 1)} 210 L ${x(0)} 210 Z`
const tooltipStyle = computed(() => ({ left: `${Math.min(80, Math.max(12, (x(activeIndex.value) / 700) * 100))}%`, top: '5px' }))
function setIndex(clientX: number, element: SVGSVGElement) {
  const rect = element.getBoundingClientRect()
  const plotX = ((clientX - rect.left) / rect.width) * 700
  const local = Math.max(0, Math.min(1, (plotX - 42) / 648))
  activeIndex.value = Math.round(local * (props.labels.length - 1))
}
function onMove(event: MouseEvent) { setIndex(event.clientX, event.currentTarget as SVGSVGElement) }
function onHit(event: MouseEvent) { const svg = (event.currentTarget as SVGRectElement).ownerSVGElement; if (svg) setIndex(event.clientX, svg) }
</script>
