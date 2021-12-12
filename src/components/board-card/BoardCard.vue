<template>
  <div class="flex items-center justify-center">
    <div class="p-2 w-full">
      <div
        @click="goToDetail(board.id)"
        class="
          bg-gray-50
          max-w-xl
          p-6
          board-card
          hover:bg-gray-100
          cursor-pointer
          shadow-lg
          transition
          duration-500
        "
      >
        <div class="text-right">
          <span
            v-bind:class="{
              'bg-blue-500': board.type === 'project',
              'bg-yellow-500': board.type === 'programing',
            }"
            class="
              inline-flex
              items-center
              uppercase
              justify-center
              px-2
              py-1
              text-xs
              font-bold
              leading-none
              text-white
            "
          >
            {{ board.type }}
          </span>
        </div>
        <div class="mt-4">
          <h1 class="text-lg text-gray-700 font-semibold">
            {{ board.title }}
          </h1>
          <div class="flex justify-between items-center">
            <p class="mt-4 max-w-2xl text-sm text-gray-500">
              {{ board.shortDescription }}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
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
  props: ["board"],
})
export default class BoardCard extends Vue {
  get board(): any {
    return this.board;
  }

  mounted(): void {
    this.board.type = "project";
  }

  public goToDetail(boardId: string): void {
    this.$router.push(`/board-detail/${boardId}`);
  }
}
</script>

<style lang="scss">
@import "./BoardCard.scss";
</style>
