<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router";

const route = useRoute();
const messageId = ref(route.params.messageId);

watch(() => route.params.messageId, (newPath) => messageId.value = newPath)
</script>
<template>
    <div class="h-screen bg-red-300 w-10">
        <h1 v-if="messageId">Viewing message {{ messageId }}</h1>
        <h1 v-else>Messages List</h1>
    </div>
</template>