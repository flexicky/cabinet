<template>
  <section class="panel community-table-panel">
    <div class="panel-heading community-table-panel__heading">
      <div>
        <h2 class="panel-title">Все площадки</h2>
        <p class="panel-subtitle">Статистика обновлена сегодня в 14:32</p>
      </div>
      <div class="filters-row">
        <label class="search-box">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="5.5" />
            <path d="m13 13 4 4" />
          </svg>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Найти сообщество"
            aria-label="Найти сообщество"
          />
        </label>
        <label class="sr-only" for="community-sort">Сортировка сообществ</label>
        <select id="community-sort" v-model="sortBy" class="sort-select">
          <option value="followers">По подписчикам</option>
          <option value="reach">По охвату</option>
          <option value="engagement">По вовлечённости</option>
        </select>
      </div>
    </div>

    <div class="table-wrap community-table">
      <table class="data-table">
        <thead>
          <tr>
            <th>Сообщество</th>
            <th>Подписчики</th>
            <th>Рост</th>
            <th>Охват / 7 дней</th>
            <th>Средний ER</th>
            <th>Публикации</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="community in communities" :key="community.id">
            <td>
              <div class="community-name">
                <CommunityAvatar
                  :initial="community.initial"
                  :tone="community.avatarTone"
                /><span
                  >{{ community.name
                  }}<small class="community-profile-meta"
                    >{{ community.type }} · vk.com/{{ community.slug }}</small
                  ></span
                >
              </div>
            </td>
            <td class="followers-cell">{{ community.formattedFollowers }}</td>
            <td class="trend-up">↗ {{ community.growth }}</td>
            <td>{{ community.formattedReach }}</td>
            <td>
              <div class="engagement">
                {{ community.formattedEngagement
                }}<span class="engagement-track"
                  ><i :style="{ width: `${community.engagementWidth}%` }"></i
                ></span>
              </div>
            </td>
            <td>{{ community.posts }}</td>
            <td><ConnectionStatus>Активно</ConnectionStatus></td>
            <td>
              <button
                class="text-link"
                type="button"
                :aria-label="`Подробнее: ${community.name}`"
                @click="emit('details', community.id)"
              >
                ···
              </button>
            </td>
          </tr>
          <tr v-if="communities.length === 0">
            <td colspan="8" class="empty-state">
              Сообщества не найдены. Попробуйте изменить запрос.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CommunityAnalyticsRow, CommunitySort } from "~/types/analytics";

defineProps<{ communities: CommunityAnalyticsRow[] }>();
const searchQuery = defineModel<string>("searchQuery", { required: true });
const sortBy = defineModel<CommunitySort>("sortBy", { required: true });
const emit = defineEmits<{ details: [id: string] }>();
</script>
