<template>
  <div class="p-2 h-full w-full">
    <div class="flex items-center justify-center bg-gray-20 h-full w-full border-dashed border-2 border-green-500 max-w-xl p-6 hover:bg-gray-100 cursor-pointer shadow-lg transition duration-500">
      <div class="m-auto">
        <PlusIcon class="h-8 w-8 text-green-500" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { PlusIcon } from "@heroicons/vue/outline";
@Options({
  components: { PlusIcon },
  props: {},
  methods: {},
  data() {
    return {};
  },
})
export default class CreateBoardCard extends Vue {}
</script>

<style lang="scss">
</style>