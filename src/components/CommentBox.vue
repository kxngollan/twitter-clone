<script setup>

import { ref } from "vue"

let message = ref("")

const onSend = () => {
    const l = message.value.trim()
    if (l.length > 0) {
        fetch("https://vue-twitter-a0868-default-rtdb.firebaseio.com/message.json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: message.value
            })
        })
    } else {
        console.log("Too short")
    }
}
</script>

<template>
    <div class="flex items-center space-x-3 p-4 border rounded-lg shadow-sm mx-auto max-w-screen-sm">

        <img src="https://via.placeholder.com/50" alt="Profile Picture" class="w-10 h-10 rounded-full object-cover" />

        <textarea type="text" placeholder="What is on your mind?"
            class="resize-none flex-grow p-2 text-gray-700 placeholder-gray-400 focus:outline-none" v-model="message" />

        <button
            class="bg-blue-100 text-black px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-400 hover:text-white"
            @click="onSend">
            Post
        </button>
    </div>
</template>