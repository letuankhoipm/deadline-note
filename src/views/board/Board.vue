<template>
  <div class="ps-board p-4">
    <div class="grid grid-flow-col auto-cols-max">
      <div
        v-for="board in listBoard"
        :key="board.group"
        class="ps-board-card shadow-lg rounded-none p-4 mx-2 border-t-4 border-green-600 "
      >
        <div class="grid grid-cols-2">
          <div class="col-span">
            <h1 class="font-bold">Lorem ipsum</h1>
          </div>
          <div class="col-span flex flex-row-reverse items-center cursor-pointer">
            <DotsVerticalIcon class="h-5 w-5" />
          </div>
        </div>
        <div class="ps-board-content">
          <draggable
            class="dragArea list-group w-full"
            :list="board.data"
            :group="board.group"
            :sort="true"
            @change="log"
            :move="checkMove"
          >
            <div
              class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
              v-for="element in board.data"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import TaskCard from "@/components/task-card/TaskCard.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { DotsVerticalIcon } from "@heroicons/vue/outline";
@Options({
  components: {
    TaskCard,
    draggable: VueDraggableNext,
    DotsVerticalIcon,
  },
  props: {
    color: {
      type: String,
      default: "teal",
    },
  },
})
export default class Board extends Vue {
  enabled = true;
  listBoard = [
    {
      data: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
      group: "ac",
    },
    {
      data: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],
      group: "ac",
    },
  ];

  dragging = false;

  add() {
    console.log("add");
  }

  replace() {
    console.log("replace");
  }

  checkMove(event: any) {
    console.log("checkMove", event);
  }

  log(event: any) {
    const { moved, added } = event;
    if (moved) console.log("moved", moved);
    if (added) console.log("added", added, added.element);
  }
}
</script>

<style lang="scss">
@import "./Board.scss";
</style>