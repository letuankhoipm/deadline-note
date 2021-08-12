<template>
  <div>
    <Project />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Project from "@/views/project/Project.vue";

@Options({
  components: { Project },
})
export default class Home extends Vue {}
</script>
