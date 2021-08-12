<template>
  <div class="bg-gray-100 ps-sidebar">
    <div class="w-64 absolute sm:relative bg-gray-200 shadow md:h-full flex-col justify-between hidden sm:flex">
      <div class="px-8">
        <ul class="mt-6">
            <li class="flex w-full justify-between hover:text-gray-500 cursor-pointer items-center py-2">
            <div class="flex items-center">
              <span class="text-sm font-bold">List project</span>
            </div>
          </li>
          <li class="flex w-full justify-between hover:text-gray-500 cursor-pointer items-center py-2">
            <div class="flex items-center">
              <CubeIcon class="h-6 w-6" />
              <span class="text-sm ml-2">Assassin's Creed Warface</span>
            </div>
          </li>
          <li class="flex w-full justify-between hover:text-gray-500 cursor-pointer items-center py-2">
            <div class="flex items-center">
              <CubeIcon class="h-6 w-6" />
              <span class="text-sm ml-2">Fifa Online 3</span>
            </div>
          </li>
          <li class="flex w-full justify-between hover:text-gray-500 cursor-pointer items-center py-2">
            <div class="flex items-center">
              <span class="text-sm font-bold">New project</span>
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
</template>

<script>
import { Vue, Options } from "vue-class-component";
import { CubeIcon, CogIcon } from "@heroicons/vue/outline";
@Options({
  components: { CubeIcon, CogIcon },
  props: {},
})
export default class Sidebar extends Vue {}
</script>

<style lang="scss">
@import "./Sidebar.scss";
</style>