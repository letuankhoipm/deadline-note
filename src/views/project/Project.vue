<template>
  <div class="ps-project p-4">
    <div class="grid grid-cols-1">
      <div class="col-span-1">
        <div>
          <h2
            class="
              text-base
              mt-4
              text-xl text-green-600
              font-semibold
              tracking-wide
              uppercase
            "
          >
            project
          </h2>
          <p class="mt-4 max-w-2xl text-sm text-gray-500">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </div>
      <hr class="my-4" />
      <div class="ps-project-list">
        <div class="grid grid-cols-4">
          <div
            v-for="(project, index) in listProject"
            :key="index"
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
import { Vue, Options } from "vue-class-component"
import ProjectCard from "@/components/project-card/ProjectCard.vue"
import { IProject } from "@/models/project.model"
import projectService from "@/services/project.service"
import execService from "@/services/exec.service"
@Options({
  components: { ProjectCard },
})
export default class Project extends Vue {
  public listProject: IProject[] = []

  mounted(): void {
    this.getProjects()
    this.onListenFetch()
  }

  public onListenFetch(): void {
    execService.refetch$.subscribe((res: any) => {
      res && this.getProjects()
    })
  }

  public getProjects(): void {
    projectService
      .getAll()
      .then((res: any): void => {
        if (!res?.data) {
          return
        }
        this.listProject = res.data
      })
      .catch()
  }
}
</script>

<style lang="scss">
@import "./Project.scss";
</style>
