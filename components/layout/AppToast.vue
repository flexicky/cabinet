<template>
  <Transition name="toast">
    <div v-if="message" class="toast-message" role="status" aria-live="polite">
      {{ message }}
      <button
        type="button"
        aria-label="Закрыть уведомление"
        @click="dismissToast"
      >
        ×
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onUnmounted, watch } from "vue";

const { message, dismissToast } = useToast();
let timeout: ReturnType<typeof setTimeout> | undefined;

watch(message, (nextMessage) => {
  if (timeout) clearTimeout(timeout);
  if (nextMessage) timeout = setTimeout(dismissToast, 3200);
});

onUnmounted(() => {
  if (timeout) clearTimeout(timeout);
});
</script>
