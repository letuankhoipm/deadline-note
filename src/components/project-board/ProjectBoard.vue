<template>
  <div class="ps-project p-4">

    <div class="grid grid-cols-1">
      <div class="ps-project-list">
        <div class="grid grid-cols-4">
          <div class="col-span-1">
            <CreateBoardCard @click="onCreatBoard()" />
          </div>
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
import CreateBoardCard from "@/components/create-board-card/CreateBoardCard.vue";
import { IBoard } from "@/models/project.model";
import ngvModalService from "@/services/ngv-modal.service";
import NewBoard from "@/modals/new-board/NewBoard.vue";
@Options({
  components: { BoardCard, CreateBoardCard },
  props: ["projectDetail", "projectId"],
  methods: {},
  data() {
    return {};
  },
  created() {
    console.log(this.projectId);
  },
})
export default class ProjectBoard extends Vue {
  public projectId = "";
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
    {
      title: "Ship",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit.",
      type: "design",
    },
    {
      title: "Ship",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit.",
      type: "design",
    },
  ];

  public onCreatBoard(projectName: string): void {
    const input = {
      projectName: projectName,
      projectId: this.projectId,
    };
    ngvModalService.open(NewBoard, input);
  }
}
</script>

<style lang="scss">
</style>