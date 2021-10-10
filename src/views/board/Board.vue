<template src="./Board.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import { VueDraggableNext } from "vue-draggable-next"
import { DotsVerticalIcon, PlusIcon, TrashIcon } from "@heroicons/vue/outline"
import Ticket from "@/components/ticket/Ticket.vue"
import {
  IBoardDetail,
  IList,
  IListRequest,
  ITicket,
  ITicketMoveRequest,
  ITicketRequest,
} from "@/models/board.model"
import { mapGetters } from "vuex"
import NgvModalService from "@/services/ngv-modal.service"
import NewTicket from "@/modals/new-ticket/NewTicket.vue"
import boardService from "@/services/board.service"
import listService from "@/services/list.service"
import calcPosition from "@/utils/calc-pos"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue"
import ticketService from "@/services/ticket.service"

@Options({
  components: {
    Ticket,
    draggable: VueDraggableNext,
    NewTicket,
    DotsVerticalIcon,
    PlusIcon,
    TrashIcon,
    MenuItem,
    MenuItems,
    Menu,
    MenuButton,
  },
  computed: {
    ...mapGetters(["g_user"]),
  },
  props: {},
  methods: {
    getDetail(): void {
      this.boardId = this.$route.params.id
      this.getBoardDetail(this.boardId)
    },
  },
  created() {
    this.getDetail()
  },
})
export default class Board extends Vue {
  public boardId = ""
  public boardDetail: IBoardDetail = {
    createAt: "",
    id: "",
    lists: [],
    members: [],
    name: "",
  }
  public newListName = ""
  public enabled = true
  public dragging = false

  // ====================================================
  // List variables
  // ====================================================

  private _imListBefore = ""
  private _imListAfter = ""
  private _currListIndex = 0
  private _currListPos = ""
  private _currListId = ""

  // ====================================================
  // Ticket variables
  // ====================================================

  private _imTicketBefore = ""
  private _imTicketAfter = ""
  private _currTicketIndex = 0
  private _currTicketPos = ""
  private _currTicketId = ""

  //=============================================================

  public onMoveList(event: any): void {
    if (!this.boardDetail.lists) {
      return
    }

    const listLen = this.boardDetail.lists.length
    this._currListIndex = event.moved.newIndex

    if (this._currListIndex === 0) {
      this._imListBefore = ""
      this._imListAfter = this.boardDetail.lists[this._currListIndex + 1].pos
    } else if (this._currListIndex === listLen - 1) {
      this._imListBefore = this.boardDetail.lists[this._currListIndex - 1].pos
      this._imListAfter = ""
    } else {
      this._imListBefore = this.boardDetail.lists[this._currListIndex - 1].pos
      this._imListAfter = this.boardDetail.lists[this._currListIndex + 1].pos
    }

    this._currListPos = calcPosition(this._imListBefore, this._imListAfter)
    this._currListId = this.boardDetail.lists[this._currListIndex].id
    listService
      .move({ pos: this._currListPos }, this._currListId)
      .then((res: any) => {
        this.boardDetail.lists[this._currListIndex].pos = res?.data
      })
      .catch((err) => console.log(err))
  }

  public onChangeTicket(
    event: any,
    list: ITicket[],
    listId: string,
    listDetail: any
  ): void {
    const { moved, added } = event
    if (moved) {
      if (!list) {
        return
      }
      const length = list.length
      this._currTicketIndex = moved.newIndex

      if (this._currTicketIndex === 0) {
        // Handle move to first position inside own list
        this._imTicketBefore = ""
        this._imTicketAfter = list[this._currTicketIndex + 1].pos
      } else if (this._currTicketIndex === length - 1) {
        // Handle move to last position inside own list
        this._imTicketBefore = list[this._currTicketIndex - 1].pos
        this._imTicketAfter = ""
      } else {
        // Handle move to last position inside own list
        this._imTicketBefore = list[this._currTicketIndex - 1].pos
        this._imTicketAfter = list[this._currTicketIndex + 1].pos
      }

      this._currTicketPos = calcPosition(
        this._imTicketBefore,
        this._imTicketAfter
      )
      this._currTicketId = list[this._currTicketIndex].id

      const reqest: ITicketMoveRequest = {
        pos: this._currTicketPos,
        boardId: this.boardId,
        listId: listId,
      }
      ticketService.move(reqest, this._currTicketId).then((res: any) => {
        console.log(res)
      })
    }

    if (added) {
      const _index = added.newIndex
      let _currPos = ""
      if (list.length === 1) {
        // Moving to empty destination list from this deposition list
        const pos = (this._currListPos = calcPosition("", ""))
        const request: ITicketMoveRequest = {
          pos: pos,
          boardId: this.boardId,
          listId: listId,
        }
        ticketService
          .move(request, added.element.id)
          .then((res: any) => {
            console.log(res)
          })
          .catch((err) => console.log(err))
      } else {
        // Moving to unempty destination list
        if (_index === 0 && list.length > 1) {
          // Moving to destination list (on top position) from this deposition list
          const _imBfPos = ""
          const _imAtPos = list[_index + 1].pos
          _currPos = calcPosition(_imBfPos, _imAtPos)
        } else if (_index === list.length - 1) {
          // Moving to destination list (on bottom position) from this deposition list
          const _imBfPos = list[_index - 1].pos
          const _imAtPos = ""
          _currPos = calcPosition(_imBfPos, _imAtPos)
        } else {
          // Moving to destination list (on between position) from this deposition list
          const _imBfPos = list[_index - 1].pos
          const _imAtPos = list[_index + 1].pos
          _currPos = calcPosition(_imBfPos, _imAtPos)
        }
        const request: ITicketMoveRequest = {
          pos: _currPos,
          boardId: this.boardId,
          listId: listId,
        }
        ticketService
          .move(request, added.element.id)
          .then((res: any) => {
            console.log(res)
          })
          .catch((err) => console.log(err))
      }
    }
  }

  //=============================================================
  public onCreateTicket(listInfo: any): void {
    const modalRef = NgvModalService.open(NewTicket, { ...listInfo }).then(
      (res: any) => {
        if (res) {
          console.log("res modal")
          this.getBoardDetail(this.boardId)
        }
      }
    )
  }

  public onTicketDetail(): void {
    const modalRef = NgvModalService.open(NewTicket)
  }

  public onCreateList(): void {
    const listReq: IListRequest = {
      title: this.newListName,
      pos: this._onInitPosParams(),
      boardId: this.boardId,
    }
    listService
      .create(listReq)
      .then((res: any) => {
        this.getBoardDetail(this.boardId)
        this.newListName = ""
      })
      .catch((err) => {
        console.log(err)
      })
  }

  public getLists(): void {
    listService
      .get()
      .then((res: any) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  public getBoardDetail(boardId: string): void {
    boardService
      .getById(boardId)
      .then((res: any) => {
        this.boardDetail = res.data
      })
      .catch((err) => console.log(err))
  }

  private _onInitPosParams(): string {
    if (this.boardDetail?.lists) {
      let rs = ""
      const listLen = this.boardDetail.lists.length
      if (listLen === 0) {
        rs = calcPosition("", "")
      } else {
        rs = calcPosition(this.boardDetail.lists[listLen - 1].pos, "")
      }
      return rs
    } else {
      return ""
    }
  }
}
</script>

<style lang="scss">
@import "./Board.scss";
</style>
