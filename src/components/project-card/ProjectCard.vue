<template>
  <div class="flex items-center justify-center">
    <div class="p-2">
      <div @click="goToDetail()" class="bg-gray-50 max-w-xl p-6 hover:bg-gray-100 cursor-pointer shadow-lg transition duration-500">
        <div class="text-center h-20">
          <img
            class="h-full mx-auto object-contain"
            :src="project.imageUrl"
            alt="project-logo"
          >
        </div>
        <div class="mt-4">
          <h1 class="text-lg text-gray-700 font-semibold">
            {{project.title}}
          </h1>
          <div class="flex justify-between items-center">
            <p class="mt-4 max-w-2xl text-sm text-gray-500">
              {{project.shortDescription}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  components: {},
  props: ["project"],
  methods: {},
  data() {
    return {};
  },
})
export default class ProjectCard extends Vue {
    public goToDetail(): void {
    this.$router.push("/project-detail");
  }
}
</script>

<style lang="scss">
</style>