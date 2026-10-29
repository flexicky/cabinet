<template>
  <section class="panel overlap-panel">
    <div class="panel-heading">
      <div>
        <h2 class="panel-title">Пересечения аудитории</h2>
        <p class="panel-subtitle">Пользователи, общие для сообществ</p>
      </div>
      <span class="metric-icon metric-icon--violet" aria-hidden="true">◎</span>
    </div>
    <ul class="overlap-list">
      <li v-for="overlap in overlaps" :key="overlap.label" class="overlap-row">
        <div class="overlap-avatars" aria-hidden="true">
          <i v-for="mark in overlap.marks" :key="mark">{{ mark }}</i>
        </div>
        <div class="overlap-info">
          <b>{{ overlap.label }}</b
          ><span>{{ overlap.active }} сейчас онлайн</span>
        </div>
        <div class="overlap-value">
          {{ overlap.percent }}<small>пересечение</small>
        </div>
      </li>
    </ul>
    <div class="quality-row">
      <span>Охват общей аудитории</span><b>31,6%</b>
    </div>
    <div class="tracker-note">
      <span aria-hidden="true">✦</span>
      <div>
        <b>Умная подсказка</b> — публикация сразу в двух сообществах может
        увеличить общий охват на 22%.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  overlaps: {
    label: string;
    marks: string[];
    active: string;
    percent: string;
  }[];
}>();
</script>
