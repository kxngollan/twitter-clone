import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";

import App from "./App.vue";

import UserHome from "./pages/UserHome.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Explore from "./pages/Explore.vue";
import Notifications from "./pages/Notifications.vue";
import Messages from "./pages/Messages.vue";
import Bookmarks from "./pages/Bookmarks.vue";
import Profile from "./pages/Profile.vue";
import More from "./pages/More.vue";
import Users from "./pages/Users.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Login },
    { path: "/register", component: Register },
    { path: "/home", component: UserHome },
    { path: "/explore", component: Explore },
    { path: "/notifications", component: Notifications },
    { path: "/messages", component: Messages },
    { path: "/messages/:messageId", component: Messages, props: true },
    { path: "/bookmarks", component: Bookmarks },
    { path: "/profile", component: Profile },
    { path: "/more", component: More },
    { path: "/users/:userId", component: Users },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
