<script setup>
import CommentSection from '../components/CommentSection.vue';
import Sidebar from '../components/Sidebar.vue';
</script>


<template>
    <section class="flex justify-start ">
        <Sidebar />
        <div class="flex flex-col mx-auto">
            <CommentSection />
        </div>
    </section>
</template>