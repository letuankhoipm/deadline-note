<template>
  <div class="grid grid-cols-3">
    <div class="col-span-2">
      <div class="w-full ps-about-project">
        <div class="p-2">
          <div class="bg-gray-50 p-6 hover:bg-gray-100 cursor-pointer shadow-lg transition duration-500">
            <div class="mt-4">
              <h1 class="text-lg text-gray-700 font-semibold">
                About this project
              </h1>
              <div class="flex justify-between items-center">
                <p class="mt-4 max-w-2xl text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <div class="w-full ps-about-project">
        <div class="p-2">
          <div class="bg-gray-50 p-6 hover:bg-gray-100 cursor-pointer shadow-lg transition duration-500">
            <div class="mt-4">
              <h1 class="text-lg text-gray-700 font-semibold">
                Project stats
              </h1>
              <div class="flex justify-between items-center">
                <p class="mt-4 max-w-2xl text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full ps-about-project">
        <div class="p-2">
          <div class="bg-gray-50 p-6 hover:bg-gray-100 cursor-pointer shadow-lg transition duration-500">
            <div class="mt-4">
              <h1 class="text-lg text-gray-700 font-semibold">
                Member
              </h1>
              <div class="flex justify-between items-center">
                <p class="mt-4 max-w-2xl text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
              </div>
            </div>
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
  props: {},
  methods: {},
  data() {
    return {};
  },
})
export default class Badge extends Vue {}
</script>

<style lang="scss">
</style>