<script setup>
import { ref, onMounted } from "vue"

const messages = ref([])
const loading = ref(true)
const err = ref("")


const fetchMessages = async () => {
    console.log("Fetching Data")
    try {
        const res = await fetch("https://vue-twitter-a0868-default-rtdb.firebaseio.com/message.json")
        if (res.ok) {
            const data = await res.json()
            const results = []
            for (const id in data) {
                results.push({
                    id: id,
                    message: data[id].message,
                })
            }
            messages.value = results
        }
    } catch (error) {
        console.error(error)
        err.value = "Failed to fetch"
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchMessages()
    console.log(messages.value)
})
</script>

<template>
    <div>
        <div v-if="err">
            <p>{{ err }}</p>
        </div>
        <div v-if="loading">
            <p>...Loading</p>
        </div>
        <div v-else-if="!loading && (!messages || messages.length === 0) && !err">No Comments Please add one</div>
        <div v-else-if="!loading && messages.length > 0">
            <div v-for="(msg, i) in messages" :key="i">
                <img src="" alt="Profile Picture">
                <div>
                    <p>{{ msg.message }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
