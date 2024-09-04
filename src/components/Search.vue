<script setup>
import { ref } from "vue"

let searchTerm = ref("")

const search = () => {
    try {
        const res = fetch("")
    } catch (err) {
        console.log(err)
    }
}
</script>

<template>
    <div class="flex justify-center items-center h-7 mt-2 ">
        <div class="flex justify-center items-center">
            <img src="" alt="seach icon">
        </div>
        <input type="text" class="bg-cream-100 rounded-r-none rounded-l w-60 h-100 m-0 p-1" v-model="searchTerm.value"
            placeholder="Search" />
    </div>

</template>