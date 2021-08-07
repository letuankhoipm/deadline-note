<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Login from "@/views/login/Login.vue"; // @ is an alias to /src

@Options({
  components: {
    Login,
  },
})
export default class Home extends Vue {}
</script>
