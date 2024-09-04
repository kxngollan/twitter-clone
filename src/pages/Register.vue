<script setup>
import { ref } from "vue";

let user = ref("");
let email = ref("")
let password = ref("");
let cPassword = ref("")

const onSubmit = () => {
    console.log(user.value, email.value, password.value, cPassword.value);
};
</script>

<template>
    <div class="w-screen h-screen flex justify-center align-middle">
        <form class="flex flex-col w-44 justify-center align-center" @submit.prevent="onSubmit">
            <label class="text-sm text-neutral-500" for="user">Username</label>
            <input class="px-0.5 py-1 border-black border rounded" type="text" name="user" id="user" v-model="user"
                placeholder="username">
            <label for="email">Email</label>
            <input class="px-0.5 py-1 border-black border rounded" type="text" name="email" id="email" v-model="email"
                placeholder="example@email.com">

            <label class="text-sm text-neutral-500" for="password">Password</label>
            <input class="px-0.5 py-1 border-black border rounded" type="password" name="password" id="password"
                v-model="password" placeholder="Password">

            <label class="text-sm text-neutral-500" for="password">Confirm Password</label>
            <input class="px-0.5 py-1 border-black border rounded" type="password" name="password" id="password"
                v-model="cPassword.value" placeholder="Confirm Password">

            <button class="mt-2 bg-blue-100 hover:bg-blue-400 hover:text-white rounded" type="submit">Register</button>
            <button class="mt-2 bg-blue-100 hover:bg-blue-400 hover:text-white rounded" type="submit">Already have an
                account</button>

        </form>
    </div>
</template>
