<template>
  <div class="ps-board p-4">
    <!-- <div class="grid grid-flow-col auto-cols-max">
      <div
        v-for="item in demoBoard.listItem"
        :key="item.listName"
        class="ps-board-card shadow-md bg-gray-50 rounded-none p-4 mx-2 border-t-4 border-green-600 overflow-y-auto"
      >
        <div class="grid grid-cols-2 mb-2">
          <div class="col-span">
            <h1 class="font-bold">
              {{item.listName}}
            </h1>
          </div>
          <div class="col-span flex flex-row-reverse items-center cursor-pointer">
            <DotsVerticalIcon class="h-5 w-5" />
          </div>
        </div>
        <div class="ps-board-content">
          <draggable
            class="dragArea list-group w-full"
            :list="item.listTicket"
            :group="demoBoard.boardName"
            :sort="true"
            @change="log"
            :move="checkMove"
          >
            <Ticket
              v-for="ticket in item.listTicket"
              :key="ticket.ticketName"
              :ticket="ticket"
            />
          </draggable>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { VueDraggableNext } from "vue-draggable-next";
import { DotsVerticalIcon } from "@heroicons/vue/outline";
import Ticket from "@/components/ticket/Ticket.vue";
import { IBoard } from "@/models/board.model";
import { mapGetters } from "vuex";
@Options({
  components: {
    Ticket,
    draggable: VueDraggableNext,
    DotsVerticalIcon,
  },
  computed: {
    ...mapGetters(['g_user'])
  },
  props: {},
  created() {
    console.log(this.g_user, 'ahihi');
    
  }
})
export default class Board extends Vue {
  enabled = true;
  // demoBoard: IBoard = {
  //   listItem: [
  //     {
  //       listTicket: [
  //         {
  //           id: 0,
  //           ticketName: "Drawing Portugal Church",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //           member: [{ name: "John" }, { name: "Henry" }],
  //           date: "12-01-2021 12:00 AM",
  //           label: {
  //             id: 1,
  //             name: "Higth Priority",
  //           },
  //         },
  //         {
  //           id: 0,
  //           ticketName: "Drawing Portugal Church",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //           member: [{ name: "John" }, { name: "Henry" }],
  //           date: "12-01-2021 12:00 AM",
  //           label: {
  //             id: 0,
  //             name: "In Progress",
  //           },
  //         },
  //         {
  //           id: 0,
  //           ticketName: "Drawing Portugal Church",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //           member: [{ name: "John" }, { name: "Henry" }],
  //           date: "12-01-2021 12:00 AM",
  //           label: {
  //             id: 2,
  //             name: "Done",
  //           },
  //         },
  //       ],
  //       listName: "To-do",
  //     },
  //     {
  //       listTicket: [
  //         {
  //           id: 0,
  //           ticketName: "Drawing Portugal Church",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //           member: [{ name: "John" }, { name: "Henry" }],
  //           date: "12-01-2021 12:00 AM",
  //           label: {
  //             id: 1,
  //             name: "Higth Priority",
  //           },
  //         },
  //         {
  //           id: 0,
  //           ticketName: "Drawing Portugal Church",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //           member: [{ name: "John" }, { name: "Henry" }],
  //           date: "12-01-2021 12:00 AM",
  //           label: {
  //             id: 0,
  //             name: "In Progress",
  //           },
  //         },
  //         {
  //           id: 0,
  //           ticketName: "Drawing Portugal Church",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //           member: [{ name: "John" }, { name: "Henry" }],
  //           date: "12-01-2021 12:00 AM",
  //           label: {
  //             id: 2,
  //             name: "Done",
  //           },
  //         },
  //       ],
  //       listName: "In progress",
  //     },
  //   ],
  //   boardName: "Design",
  // };

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