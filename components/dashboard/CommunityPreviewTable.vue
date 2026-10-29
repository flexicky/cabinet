<template>
  <section class="panel table-wrap">
    <table class="data-table">
      <thead>
        <tr>
          <th>Сообщество</th>
          <th>Подписчики</th>
          <th>Охват за неделю</th>
          <th>Вовлечённость</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="community in communities" :key="community.id">
          <td>
            <div class="community-name">
              <CommunityAvatar
                :initial="community.initial"
                :tone="community.avatarTone"
              /><span>{{ community.name }}</span>
            </div>
          </td>
          <td>{{ community.formattedFollowers }}</td>
          <td>{{ community.formattedReach }}</td>
          <td>{{ community.formattedEngagement }}</td>
          <td><ConnectionStatus>Подключено</ConnectionStatus></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
import type { VkCommunity } from "~/types/analytics";

defineProps<{
  communities: (VkCommunity & {
    formattedFollowers: string;
    formattedReach: string;
    formattedEngagement: string;
  })[];
}>();
</script>
