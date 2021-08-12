<template>
  <div class="ps-project p-4">

    <div class="grid grid-cols-1">
      <div class="col-span-1">
        <div>
          <h2 class="text-base mt-4 text-xl text-green-600 font-semibold tracking-wide uppercase">project</h2>
          <p class="mt-4 max-w-2xl text-sm text-gray-500">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </div>
      <hr class="my-4">
      <div class="ps-project-list">
        <div class="grid grid-cols-4">
          <div
            v-for="project in listProject"
            :key="project.title"
            class="col-span-1"
          >
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import ProjectCard from "@/components/project-card/ProjectCard.vue";
import IProject from "@/models/project.model";
@Options({
  components: { ProjectCard },
  props: {},
  methods: {},
  data() {
    return {};
  },
})
export default class Project extends Vue {
  public listProject: IProject[] = [
    {
      title: "Assassin's Creed",
      imageUrl:
        "https://logos-world.net/wp-content/uploads/2020/06/Assassins-Creed-Logo-2007-2010.png",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit.",
    },
    {
      title: "Fifa Online 3",
      imageUrl: "https://upload.wikimedia.org/wikipedia/vi/3/36/Logo_fo3.png",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit.",
    },
  ];
}
</script>

<style lang="scss">
@import "./Project.scss";
</style>