<script setup>
import Sidebar from '../components/Sidebar.vue';
import Search from '../components/Search.vue';
import MessagePeople from '../components/MessagePeople.vue';
import MessageBox from '../components/MessageBox.vue';


</script>
<template>
    <section class="flex justify-start">
        <Sidebar />
        <div class="flex flex-col mx-auto">
            <Search />
            <MessagePeople />
        </div>
        <MessageBox />
    </section>
</template>
