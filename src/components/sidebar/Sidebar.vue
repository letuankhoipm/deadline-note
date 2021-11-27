<template>
  <div class="bg-gray-100 ps-sidebar">
    <div
      class="
        w-64
        absolute
        sm:relative
        bg-gray-200
        shadow
        md:h-full
        flex-col
        justify-between
        hidden
        sm:flex
      "
    >
      <div class="px-8">
        <ul class="mt-6">
          <li
            class="
              flex
              w-full
              justify-between
              hover:text-gray-500
              cursor-pointer
              items-center
              py-2
            "
          >
            <div class="flex items-center">
              <span @click="showList()" class="text-sm font-bold"
                >List project</span
              >
            </div>
          </li>
          <li
            class="
              flex
              w-full
              justify-between
              hover:text-gray-500
              cursor-pointer
              items-center
              py-2
            "
          >
            <div class="flex items-center">
              <span @click="switchNewProjectModal()" class="text-sm font-bold"
                >New project</span
              >
            </div>
          </li>
        </ul>
      </div>
      <div class="px-8 border-t border-gray-700">
        <ul class="w-full flex items-center justify-between bg-gray-200">
          <li class="cursor-pointer pt-5 pb-3">
            <div class="flex items-center">
              <CogIcon class="h-6 w-6" />
              <span class="text-sm ml-2">Project settings</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-if="newProjectVisibility">
    <NewProject @exit="switchNewProjectModal()" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import { CubeIcon, CogIcon, UserAddIcon } from "@heroicons/vue/outline"
import NewProject from "@/modals/new-project/NewProject.vue"
import NgvModalService from "@/services/ngv-modal.service"
import execService from "@/services/exec.service"

@Options({
  components: { CubeIcon, CogIcon, NewProject, UserAddIcon },
})
export default class Sidebar extends Vue {
  public newProjectVisibility = false

  public switchNewProjectModal(): void {
    const modalRef = NgvModalService.open(NewProject, {
      name: "New Project",
    })
    modalRef.then((result) => {
      result && execService.refetch()
    })
  }

  public showList(): void {
    this.$router.push("/home")
  }
}
</script>

<style lang="scss">
@import "./Sidebar.scss";
</style>
