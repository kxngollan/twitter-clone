<script setup>
import { ref } from "vue";

const people = ref([]);

for (let i = 0; i < 40; i++) {
    people.value.push({
        label: `Person Being Messages ${i + 1}`,
        img: `https://placehold.co/200x200/000/fff?text=${i + 1}`,
        link: `number${i}`
    });
}
</script>

<template>
    <div class="h-screen overflow-auto">
        <router-link v-for="(person, i) in people" :key="i" :to="`/messages/${person.link}`">
            <div class="flex items-center gap-4 p-2 border-b border-gray-200">
                <img class="rounded-full w-10 h-10" :src="person.img" :alt="`Profile image of ${person.label}`" />
                <h2 class="text-lg font-semibold">{{ person.label }}</h2>
            </div>
        </router-link>
    </div>
</template>
