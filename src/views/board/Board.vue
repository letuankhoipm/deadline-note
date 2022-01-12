<template>
  <div class="ps-board pt-3 px-2">
    <div class="grid grid-cols-3 px-2 mb-4">
      <div class="col-span-2">
        <h5 class="font-bold">
          {{ boardDetail.title }}
        </h5>
      </div>
      <div class="col-span-1 text-right">
        <Menu as="div" class="ml-3 relative z-10">
          <div>
            <MenuButton>
              <DotsVerticalIcon class="h-5 w-5" />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            class="border-t-4 border-black-600"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="origin-top-right absolute right-0 my-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem v-slot="{ active }">
                <button
                  @click="onRemoveBoard"
                  class="btn-ps-text-icon p-2 w-full"
                  :class="[
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  ]"
                >
                  <TrashIcon class="h-5 w-5" />
                  <span class="mx-2"> Delete Board </span>
                </button>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>

    <div class="draggable mt-4">
      <div class="dragged-list">
        <div class="flex">
          <div class="col-span">
            <draggable
              class="dragArea list-group flex"
              :list="boardDetail?.lists"
              :group="'col'"
              :sort="true"
              @change="onMoveList"
            >
              <div
                class="col-span ps-board-card shadow-md bg-gray-50 rounded-none p-4 mx-2 border-t-4 border-green-600 overflow-y-auto"
                v-for="element in boardDetail.lists"
                :key="element.title"
              >
                <div class="mb-2 grid grid-cols-2">
                  <div class="col-span">
                    <h1 class="font-bold cursor-move">
                      {{ element.title }}
                    </h1>
                  </div>
                  <div
                    class="col-span flex flex-row-reverse items-center cursor-pointer cursor-move"
                  >
                    <Menu as="div" class="ml-3 relative z-10">
                      <div>
                        <MenuButton>
                          <DotsVerticalIcon class="h-5 w-5" />
                        </MenuButton>
                      </div>
                      <transition
                        enter-active-class="transition ease-out duration-100"
                        class="border-t-4 border-black-600"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95"
                      >
                        <MenuItems
                          class="origin-top-right absolute right-0 my-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <MenuItem v-slot="{ active }">
                            <button
                              @click="onRemoveList(element.id)"
                              class="btn-ps-text-icon p-2 w-full"
                              :class="[
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              ]"
                            >
                              <TrashIcon class="h-5 w-5" />
                              <span class="mx-2"> Remove List </span>
                            </button>
                          </MenuItem>
                        </MenuItems>
                      </transition>
                    </Menu>
                  </div>
                </div>
                <div class="ps-board-content">
                  <draggable
                    class="dragArea list-group w-full"
                    :list="element.tickets"
                    :group="boardDetail.id"
                    :sort="true"
                    @change="
                      onChangeTicket($event, element.tickets, element.id)
                    "
                  >
                    <Ticket
                      v-for="ticket in element.tickets"
                      :key="ticket.title"
                      :ticket="ticket"
                      @click="onTicketDetail(ticket)"
                    />

                    <div class="create-ticket">
                      <button
                        @click="onCreateTicket(element)"
                        class="btn-ps btn-ps-action w-full text-center"
                      >
                        <PlusIcon class="h-5 w-5 inline" />
                      </button>
                    </div>
                  </draggable>
                </div>
              </div>
            </draggable>
          </div>
          <div class="col-span">
            <div
              class="col-span ps-new-list shadow-md bg-gray-50 rounded-none p-4 mx-2 border-t-4 overflow-y-auto"
            >
              <div class="mb-2 grid grid-cols-2">
                <div class="col-span"></div>
                <div
                  class="col-span flex flex-row-reverse items-center cursor-pointer"
                >
                  <PlusIcon
                    @click="onCreateList()"
                    class="h-5 w-5 btn-ps-action"
                  />
                </div>
                <div class="col-span-2 mt-2">
                  <form>
                    <input
                      v-model="newListName"
                      class="m-0 w-full p-0"
                      placeholder="Add another list"
                      type="text"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { VueDraggableNext } from 'vue-draggable-next';
import { DotsVerticalIcon, PlusIcon, TrashIcon } from '@heroicons/vue/outline';
import Ticket from '@/components/ticket/Ticket.vue';
import {
  IBoardDetail,
  IListRequest,
  ITicket,
  ITicketMoveRequest,
} from '@/models/board.model';
import { mapGetters } from 'vuex';
import NgvModalService from '@/services/ngv-modal.service';
import NewTicket from '@/modals/new-ticket/NewTicket.vue';
import boardService from '@/services/board.service';
import listService from '@/services/list.service';
import calcPosition from '@/utils/calc-pos';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import ticketService from '@/services/ticket.service';
import ngvModalService from '@/services/ngv-modal.service';
import ConfirmModal from '@/modals/confirm-modal/ConfirmModal.vue';
import toastrService from '@/services/toastr.service';
import execService from '@/services/exec.service';

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
    ...mapGetters(['g_user']),
  },
  props: {},
  methods: {
    getDetail(): void {
      this.boardId = this.$route.params.id;
      this.getBoardDetail(this.boardId);
      execService.refetch$.subscribe((res: any) => {
        res && this.getBoardDetail(this.boardId);
      });
    },
  },
  created() {
    this.getDetail();
    setInterval(() => {
      this.getDetail();
    }, 15000);
  },
})
export default class Board extends Vue {
  public boardId = '';
  public boardDetail: IBoardDetail = {
    createAt: '',
    id: '',
    lists: [],
    members: [],
    title: '',
  };
  public newListName = '';
  public enabled = true;
  public dragging = false;

  // ====================================================
  // List variables
  // ====================================================

  private _imListBefore = '';
  private _imListAfter = '';
  private _currListIndex = 0;
  private _currListPos = '';
  private _currListId = '';

  // ====================================================
  // Ticket variables
  // ====================================================

  private _imTicketBefore = '';
  private _imTicketAfter = '';
  private _currTicketIndex = 0;
  private _currTicketPos = '';
  private _currTicketId = '';

  //=============================================================

  public onMoveList(event: any): void {
    if (!this.boardDetail.lists) {
      return;
    }

    const listLen = this.boardDetail.lists.length;
    this._currListIndex = event.moved.newIndex;

    if (this._currListIndex === 0) {
      this._imListBefore = '';
      this._imListAfter = this.boardDetail.lists[this._currListIndex + 1].pos;
    } else if (this._currListIndex === listLen - 1) {
      this._imListBefore = this.boardDetail.lists[this._currListIndex - 1].pos;
      this._imListAfter = '';
    } else {
      this._imListBefore = this.boardDetail.lists[this._currListIndex - 1].pos;
      this._imListAfter = this.boardDetail.lists[this._currListIndex + 1].pos;
    }

    this._currListPos = calcPosition(this._imListBefore, this._imListAfter);
    this._currListId = this.boardDetail.lists[this._currListIndex].id;
    listService
      .move({ pos: this._currListPos }, this._currListId)
      .then((res: any) => {
        this.boardDetail.lists[this._currListIndex].pos = res?.data;
      })
      .catch((err) => console.log(err));
  }

  public onChangeTicket(event: any, list: ITicket[], listId: string): void {
    const { moved, added } = event;
    if (moved) {
      if (!list) {
        return;
      }
      const length = list.length;
      this._currTicketIndex = moved.newIndex;

      if (this._currTicketIndex === 0) {
        // Handle move to first position inside own list
        this._imTicketBefore = '';
        this._imTicketAfter = list[this._currTicketIndex + 1].pos;
      } else if (this._currTicketIndex === length - 1) {
        // Handle move to last position inside own list
        this._imTicketBefore = list[this._currTicketIndex - 1].pos;
        this._imTicketAfter = '';
      } else {
        // Handle move to last position inside own list
        this._imTicketBefore = list[this._currTicketIndex - 1].pos;
        this._imTicketAfter = list[this._currTicketIndex + 1].pos;
      }

      this._currTicketPos = calcPosition(
        this._imTicketBefore,
        this._imTicketAfter
      );
      this._currTicketId = list[this._currTicketIndex].id;

      const request: ITicketMoveRequest = {
        pos: this._currTicketPos,
        boardId: this.boardId,
        listId: listId,
      };
      ticketService.move(request, this._currTicketId).then((res: any) => {
        console.log(res);
      });
    }

    if (added) {
      const _index = added.newIndex;
      let _currPos = '';
      if (list.length === 1) {
        // Moving to empty destination list from this deposition list
        const pos = (this._currListPos = calcPosition('', ''));
        const request: ITicketMoveRequest = {
          pos: pos,
          boardId: this.boardId,
          listId: listId,
        };
        ticketService
          .move(request, added.element.id)
          .then((res: any) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      } else {
        // Moving to unempty destination list
        if (_index === 0 && list.length > 1) {
          // Moving to destination list (on top position) from this deposition list
          const _imBfPos = '';
          const _imAtPos = list[_index + 1].pos;
          _currPos = calcPosition(_imBfPos, _imAtPos);
        } else if (_index === list.length - 1) {
          // Moving to destination list (on bottom position) from this deposition list
          const _imBfPos = list[_index - 1].pos;
          const _imAtPos = '';
          _currPos = calcPosition(_imBfPos, _imAtPos);
        } else {
          // Moving to destination list (on between position) from this deposition list
          const _imBfPos = list[_index - 1].pos;
          const _imAtPos = list[_index + 1].pos;
          _currPos = calcPosition(_imBfPos, _imAtPos);
        }
        const request: ITicketMoveRequest = {
          pos: _currPos,
          boardId: this.boardId,
          listId: listId,
        };
        ticketService
          .move(request, added.element.id)
          .then((res: any) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }
    }
  }

  //=============================================================
  public onCreateTicket(listInfo: any): void {
    NgvModalService.open(NewTicket, { ...listInfo, type: 'create' }).then(
      (res: any) => {
        if (res) {
          this.getBoardDetail(this.boardId);
        }
      }
    );
  }

  public onTicketDetail(ticketDetail: ITicket): void {
    NgvModalService.open(NewTicket, { ...ticketDetail, type: 'update' });
  }

  public onCreateList(): void {
    const listReq: IListRequest = {
      title: this.newListName,
      pos: this._onInitPosParams(),
      boardId: this.boardId,
    };
    listService
      .create(listReq)
      .then(() => {
        this.getBoardDetail(this.boardId);
        this.newListName = '';
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

  public getBoardDetail(boardId: string): void {
    boardService
      .getById(boardId)
      .then((res: any) => {
        this.boardDetail = res.data;
      })
      .catch((err) => console.log(err));
  }

  private _onInitPosParams(): string {
    if (this.boardDetail?.lists) {
      let rs = '';
      const listLen = this.boardDetail.lists.length;
      if (listLen === 0) {
        rs = calcPosition('', '');
      } else {
        rs = calcPosition(this.boardDetail.lists[listLen - 1].pos, '');
      }
      return rs;
    } else {
      return '';
    }
  }

  public onRemoveBoard(): void {
    const modalRef = ngvModalService.open(ConfirmModal, {
      title: 'Delete Board',
      msg: 'Are you sure you want to delete this board?',
    });
    modalRef.then((result) => {
      result && this.onDelete();
    });
  }

  public onDelete(): void {
    boardService.delete(this.boardDetail.id).then((res) => {
      if (!res) {
        return;
      }
      toastrService.success('Notification', 'Delete board successfully!');
      execService.refetch();
      this.$router.push('/home');
    });
  }

  public onRemoveList(listId: string): void {
    const modalRef = ngvModalService.open(ConfirmModal, {
      title: 'Remove List',
      msg: 'Are you sure you want to remove this list?',
    });
    modalRef.then((result) => {
      if (result) {
        listService.remove(listId).then((res) => {
          if (!res) {
            return;
          }
          toastrService.success('Notification', 'Remove list successfully!');
          execService.refetch();
        });
      }
    });
  }
}
</script>

<style lang="scss">
@import './Board.scss';
</style>
