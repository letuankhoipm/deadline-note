<template>
  <div class="ps-project p-4">

    <div class="grid grid-cols-1">
      <div class="ps-project-list">
        <div class="grid grid-cols-4">
          <div
            v-for="board in listBoards"
            :key="board.title"
            class="col-span-1"
          >
            <BoardCard :board="board" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import BoardCard from "@/components/board-card/BoardCard.vue";
import { IBoard } from "@/models/project.model";
@Options({
  components: { BoardCard },
  props: {},
  methods: {},
  data() {
    return {};
  },
})
export default class ProjectBoard extends Vue {
  public listBoards: IBoard[] = [
    {
      title: "Design Achitecture",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit.",
      type: "design",
    },
    {
      title: "Programing UI",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit.",
      type: "programing",
    },
  ];
}
</script>

<style lang="scss">
</style>