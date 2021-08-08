<template>
  <div class="flex justify-center">
    <div class="flex mx-10">
      <div class="card1 w-64 flex justify-center px-5">
        <draggable
          class="dragArea list-group w-full"
          :list="list1"
          :group="{ name: 'people' }"
          :sort="false"
          @change="log"
          :move="checkMove"
        >
          <div
            class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
            v-for="element in list1"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
      <div class="card1 w-64 flex justify-center">
        <draggable
          class="dragArea list-group w-full"
          :list="list2"
          group="people"
          @change="log"
          :move="checkMove"
        >
          <div
            class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
            v-for="element in list2"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
    </div>

    <div class="flex justify-between">
      <TaskCard
        class="w-64 mr-1"
        :value="list1"
      />
      <TaskCard
        class="w-64"
        :value="list2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import draggable from "vuedraggable";
import TaskCard from "@/components/task-card/TaskCard.vue";
import { VueDraggableNext } from "vue-draggable-next";
@Options({
  components: {
    TaskCard,
    draggable: VueDraggableNext,
  },
  props: {
    color: {
      type: String,
      default: "teal",
    },
  },
})
export default class Board extends Vue {
  public columns = [
    {
      title: "Backlog",
      tasks: [
        {
          id: 1,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request",
        },
        {
          id: 2,
          title: "Provide documentation on integrations",
          date: "Sep 12",
        },
        {
          id: 3,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design",
        },
        {
          id: 4,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request",
        },
        {
          id: 5,
          title: "Test checkout flow",
          date: "Sep 15",
          type: "QA",
        },
      ],
    },
    {
      title: "In Progress",
      tasks: [
        {
          id: 6,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design",
        },
        {
          id: 7,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request",
        },
        {
          id: 8,
          title: "Provide documentation on integrations",
          date: "Sep 12",
          type: "Backend",
        },
      ],
    },
    {
      title: "Review",
      tasks: [
        {
          id: 9,
          title: "Provide documentation on integrations",
          date: "Sep 12",
        },
        {
          id: 10,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design",
        },
        {
          id: 11,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request",
        },
        {
          id: 12,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design",
        },
        {
          id: 13,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request",
        },
      ],
    },
    {
      title: "Done",
      tasks: [
        {
          id: 14,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request",
        },
        {
          id: 15,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design",
        },
        {
          id: 16,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request",
        },
      ],
    },
  ];

  enabled = true;
  list1 = [
    { name: "John", id: 1 },
    { name: "Joao", id: 2 },
    { name: "Jean", id: 3 },
    { name: "Gerard", id: 4 },
  ];
  list2 = [
    { name: "Juan", id: 5 },
    { name: "Edgard", id: 6 },
    { name: "Johnson", id: 7 },
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