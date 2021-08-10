<template>
  <div id="app">
    <MainLayout />
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import MainLayout from "@/layouts/main-layout/MainLayout.vue";

@Options({
  components: { MainLayout },
  props: {},
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
@import url("https://use.fontawesome.com/releases/v5.4.1/css/all.css");
@import "./assets/scss/_button.scss";
@import "./assets/scss/_input.scss";
</style>
