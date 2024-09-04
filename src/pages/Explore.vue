<script setup>
import ExploreSection from '../components/ExploreSection.vue';
import Search from '../components/Search.vue';
import Sidebar from '../components/Sidebar.vue';
</script>
<template>
    <section class="flex justify-start ">
        <Sidebar />
        <div class="flex flex-col mx-auto">
            <Search />
            <ExploreSection />
        </div>
    </section>
</template>
