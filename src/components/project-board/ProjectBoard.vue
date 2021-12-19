<template>
  <div class="ps-project p-4">
    <div class="grid grid-cols-1">
      <div class="ps-project-list overflow-auto">
        <div class="grid grid-cols-4">
          <div class="col-span-1 ps-create-board">
            <CreateBoardCard
              @click="onCreateBoard(projectDetail.projectName)"
            />
          </div>
          <div
            v-for="board in projectDetail.boards"
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
import ProjectDetail from "@/views/project-detail/ProjectDetail.vue";
@Options({
  components: { BoardCard, CreateBoardCard },
  props: ["projectDetail", "projectId"],
  methods: {},
  data() {
    return {};
  },
})
export default class ProjectBoard extends Vue {
  public listBoard: IBoard[] = [];

  get projectDetail(): ProjectDetail {
    return this.projectDetail;
  }

  get projectId(): string {
    return this.projectId;
  }

  public onCreateBoard(projectName: string): void {
    const input = {
      projectName: projectName,
      projectId: this.projectId,
    };
    ngvModalService.open(NewBoard, input).then((result) => {
      if (result) {
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    });
  }
}
</script>

<style lang="scss">
.ps-create-board {
  height: 186px;
}
</style>
