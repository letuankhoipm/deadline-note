<template src="./Teamwork.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import ProjectBoard from "@/components/project-board/ProjectBoard.vue";
@Options({
  components: { ProjectBoard },
  props: {},
  methods: {},
  data() {
    return {};
  },
})
export default class Teamwork extends Vue {}
</script>

<style lang="scss">
@import "./Teamwork.scss";
</style>