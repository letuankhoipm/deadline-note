<template src="./Board.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { VueDraggableNext } from "vue-draggable-next";
import { DotsVerticalIcon, PlusIcon } from "@heroicons/vue/outline";
import Ticket from "@/components/ticket/Ticket.vue";
import { IBoardDetail, IListRequest } from "@/models/board.model";
import { mapGetters } from "vuex";
import NgvModalService from "@/services/ngv-modal.service";
import NewTicket from "@/modals/new-ticket/NewTicket.vue";
import boardService from "@/services/board.service";
import listService from "@/services/list.service";
import calcPosition from "@/utils/calc-pos";

@Options({
  components: {
    Ticket,
    draggable: VueDraggableNext,
    NewTicket,
    DotsVerticalIcon,
    PlusIcon,
  },
  computed: {
    ...mapGetters(["g_user"]),
  },
  props: {},
  methods: {
    getDetail(): void {
      this.boardId = this.$route.params.id;
      this.callApisBoard(this.boardId);
    },
  },
  created() {
    this.getDetail();
  },
})
export default class Board extends Vue {
  public boardId = "";
  public boardDetail: IBoardDetail = {
    createAt: "",
    id: "",
    lists: [],
    members: [],
    name: "",
  };
  public newListName = "";
  enabled = true;
  // demoBoard: IBoardDetail = {
  //   boardId: "board-1",
  //   listItem: [
  //     {
  //       listTicket: [
  //         {
  //           id: 0,
  //           ticketName: "Drawing Portugal Church",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //           member: [
  //             {
  //               username: "John Terry",
  //               email: "terry@gmail.com",
  //               id: "uid",
  //               createAt: "iso string",
  //             },
  //           ],
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
  //           member: [],
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
  //           member: [],
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
  //           member: [],
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
  //           member: [],
  //           date: "12-01-2021 12:00 AM",
  //           label: {
  //             id: 0,
  //             name: "Bugs",
  //           },
  //         },
  //         {
  //           id: 0,
  //           ticketName: "Drawing Portugal Church",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //           member: [],
  //           date: "12-01-2021 12:00 AM",
  //           label: {
  //             id: 2,
  //             name: "Done",
  //           },
  //         },
  //       ],
  //       listName: "In progress",
  //     },
  //     {
  //       listTicket: [
  //         {
  //           id: 0,
  //           ticketName: "Drawing Portugal Church",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //           member: [],
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
  //           member: [],
  //           date: "12-01-2021 12:00 AM",
  //           label: {
  //             id: 0,
  //             name: "Resolve",
  //           },
  //         },
  //         {
  //           id: 0,
  //           ticketName: "Drawing Portugal Church",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //           member: [],
  //           date: "12-01-2021 12:00 AM",
  //           label: {
  //             id: 2,
  //             name: "Done",
  //           },
  //         },
  //       ],
  //       listName: "Resolve",
  //     },
  //     {
  //       listTicket: [
  //         {
  //           id: 0,
  //           ticketName: "Drawing Portugal Church",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //           member: [],
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
  //           member: [],
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
  //           member: [],
  //           date: "12-01-2021 12:00 AM",
  //           label: {
  //             id: 2,
  //             name: "Done",
  //           },
  //         },
  //       ],
  //       listName: "Fixed",
  //     },
  //     {
  //       listTicket: [
  //         {
  //           id: 0,
  //           ticketName: "Drawing Portugal Church",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //           member: [],
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
  //           member: [],
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
  //           member: [],
  //           date: "12-01-2021 12:00 AM",
  //           label: {
  //             id: 2,
  //             name: "Done",
  //           },
  //         },
  //       ],
  //       listName: "Close",
  //     },
  //   ],
  //   boardName: "ahihi",
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

  //=============================================================
  public onCreateTicket(listInfo: any): void {
    const modalRef = NgvModalService.open(NewTicket, listInfo);
  }

  public onTicketDetail(): void {
    const modalRef = NgvModalService.open(NewTicket);
  }

  public onCreateList(): void {
    const listReq: IListRequest = {
      name: this.newListName,
      pos: this._onInitPosParams(),
      boardId: this.boardId,
    };
    listService
      .create(listReq)
      .then((res: any) => {
        this.callApisBoard(this.boardId);
        this.newListName = "";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public getLists(): void {
    listService
      .get()
      .then((res: any) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public callApisBoard(boardId: string): void {
    boardService
      .getById(boardId)
      .then((res: any) => {
        this.boardDetail = res.data;
      })
      .catch((err) => console.log(err));
  }

  private _onInitPosParams(): string {
    if (this.boardDetail?.lists) {
      let rs = "";
      const listLen = this.boardDetail.lists.length;
      if (listLen === 0) {
        rs = calcPosition("", "");
      } else {
        rs = calcPosition(this.boardDetail.lists[listLen - 1].pos, "");
      }
      return rs;
    } else {
      return "";
    }
  }
}
</script>

<style lang="scss">
@import "./Board.scss";
</style>