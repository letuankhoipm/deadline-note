<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      ></span>
      <div
        class="inline-block align-bottom bg-white overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="w-full">
            <div class="mt-3 text-center sm:mt-0 sm:text-left">
              <div class="grid grid-cols-2">
                <div class="col-span">
                  <CreditCardIcon
                    class="h-5 w-5 leading-8 self-center cursor-pointer"
                  />
                </div>
                <div class="col-span text-right">
                  <XIcon
                    @click="onCancel()"
                    class="h-5 w-5 float-right leading-8 self-center cursor-pointer"
                  />
                </div>
                <div class="grid grid-cols-4">
                  <div class="col-span-3"></div>
                </div>

                <div class="col-span-2">
                  <div class="form-group">
                    <input
                      @keyup.enter="updateTicketTitle()"
                      class="form-control"
                      v-model="newTicketForm.title"
                      placeholder="Title"
                      id="title"
                      name="title"
                      type="text"
                    />
                    <p v-if="listDetail?.title">
                      in list {{ listDetail?.title }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-4">
                <div class="col-span-3 mr-2">
                  <div class="mt-2">
                    <div class="main-info">
                      <div class="grid grid-cols-2">
                        <div class="col-span mr-2">
                          <div class="form-group">
                            <p class="text-sm text-gray-500">Assignment</p>
                            <Multiselect
                              mode="tags"
                              @search-change="onTyping($event)"
                              :closeOnSelect="false"
                              :searchable="true"
                              :options="users"
                            />
                          </div>
                        </div>
                        <div class="col-span ml-2">
                          <div class="form-group">
                            <p class="text-sm text-gray-500">Label</p>
                            <div class="grid grid-cols-2">
                              <div class="col-span flex mr-2 items-end">
                                <div
                                  class="ps-badge"
                                  v-bind:class="{
                                    'bg-green-500': priority === 0,
                                    'bg-blue-400': priority === 1,
                                    'bg-red-500': priority === 2,
                                  }"
                                ></div>
                              </div>
                              <div class="col-span ml-2">
                                <Multiselect
                                  v-bind="value"
                                  v-model="newTicketForm.priority"
                                  placeholder="Choose"
                                  :options="priorityLabel"
                                >
                                </Multiselect>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-full my-4">
                        <p class="text-sm text-gray-500">Description</p>
                        <input
                          class="p-0"
                          @keyup.enter="onAddDescription()"
                          v-model="newTicketForm.description"
                          name=""
                          id=""
                        />
                        <p class="text-right">
                          <span
                            @click="onAddDescription"
                            class="underline mx-2 cursor-pointer text-green-400"
                            >Add</span
                          >
                        </p>
                      </div>
                    </div>
                    <div class="comment-section overflow-auto">
                      <p class="text-sm text-gray-500 mb-4">Activity</p>
                      <div class="comment-content form-group">
                        <div class="grid grid-cols-12">
                          <div class="col-span-1">
                            <PencilIcon class="h-5 w-5 leading-8 self-center" />
                          </div>
                          <div class="col-span-11">
                            <input
                              v-model="newComment"
                              class="text-sm text-gray-400 form-control"
                              type="text"
                            />
                            <p class="text-right">
                              <span
                                @click="onComment"
                                class="underline mx-2 cursor-pointer text-green-400"
                                >Comment</span
                              >
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        v-for="(comment, index) of listComments"
                        :key="index"
                        class="comment-content form-group"
                      >
                        <div class="grid grid-cols-12">
                          <div class="col-span-1">
                            <UserIcon class="h-5 w-5 leading-8 self-center" />
                          </div>
                          <div class="col-span-11">
                            <p class="text-md text-gray-700 font-bold">
                              {{ comment.user?.username }}
                            </p>
                            <p>! {{ comment.content }}</p>
                            <p
                              v-if="comment.userId === userId"
                              class="text-right"
                            >
                              <span
                                v-show="
                                  !isEditComment && comment.userId === userId
                                "
                                @click="onEditComment(comment)"
                                class="underline mx-2 cursor-pointer text-gray-400"
                                >Edit</span
                              >
                              <span
                                v-show="
                                  !isEditComment && comment.userId === userId
                                "
                                @click="onDeleteComment(comment.id)"
                                class="underline mx-2 cursor-pointer text-gray-400"
                                >Delete</span
                              >
                            </p>
                          </div>
                        </div>
                      </div>
                      <div v-show="isEditComment" class="input-edit">
                        <div class="grid grid-cols-12">
                          <div class="col-span-1"></div>
                          <div class="col-span-11">
                            <input
                              v-model="currentCommentContent"
                              class="text-sm text-gray-400 form-control p-0"
                              type="text"
                            />
                            <p class="text-right">
                              <span
                                class="underline mx-2 cursor-pointer text-gray-400"
                                >Cancel</span
                              >
                              <span
                                @click="onUpdateComment"
                                class="underline mx-2 cursor-pointer text-green-400"
                                >Save</span
                              >
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-1 ml-2">
                  <button class="btn-ps btn-ps-outlined btn my-2 w-full">
                    join card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            v-if="input.type === 'create'"
            @click="onSave()"
            class="btn-ps btn-ps-raise btn my-2"
          >
            save
          </button>
          <button
            v-if="input.type !== 'create'"
            @click="onCancel()"
            class="btn-ps btn-ps-flat btn my-2"
          >
            close
          </button>
          <button
            v-if="input.type === 'create'"
            @click="onCancel()"
            class="btn-ps btn-ps-flat btn my-2"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import {
  XIcon,
  CreditCardIcon,
  UserIcon,
  PencilIcon,
} from '@heroicons/vue/outline';
import NgvModalService from '@/services/ngv-modal.service';
import Multiselect from '@vueform/multiselect';
import { Subject } from 'rxjs';
import { IUser } from '@/models/user.modal';
import { debounceTime } from 'rxjs/operators';
import searchService from '@/services/search.service';
import ticketService from '@/services/ticket.service';
import calcPosition from '@/utils/calc-pos';
import { ITicket, ITicketRequest } from '@/models/board.model';
import ngvModalService from '@/services/ngv-modal.service';
import commentService from '@/services/comment.service';
import toastrService from '@/services/toastr.service';
import { IComment } from '@/models/comment.model';
import ConfirmModal from '../confirm-modal/ConfirmModal.vue';

@Options({
  components: {
    XIcon,
    CreditCardIcon,
    Multiselect,
    UserIcon,
    PencilIcon,
  },
  props: ['input'],
  created() {
    this.patchValue();
    this._parseUser();
    this.newTicketForm.listId = this.input?.id;
    this._onSearching();
  },
  data() {
    return {
      newTicketForm: {
        title: '',
        description: '',
        pos: '',
        listId: '',
        memberIds: [],
        priority: 1,
      },
      get priority(): number {
        return this.newTicketForm.priority;
      },
    };
  },
})
export default class NewTicket extends Vue {
  get newTicketForm(): ITicket {
    return this.newTicketForm;
  }

  get input(): any {
    return this.input;
  }

  public priorityLabel = [
    { label: 'Done', value: 0 },
    { label: 'Processing', value: 1 },
    { label: 'Cancel', value: 2 },
  ];
  public newComment = '';
  public newDescription = '';
  public currentCommentContent = '';
  public currentCommentId = '';

  public users = [];
  public listDetail: any;
  public ticketDetail: ITicket | undefined;
  public onSearch$ = new Subject<any>();
  public listComments: IComment[] = [];
  public isEditComment = false;

  private _currListId = '';
  private _currTicketId = '';
  public userId = '';

  public text =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

  public onCancel(): void {
    NgvModalService.dismiss();
  }

  public onTyping(event: Event): void {
    const searchField = event;
    this.onSearch$.next(searchField);
  }

  public patchValue(): void {
    if (!this.input) {
      return;
    }
    if (this.input.type === 'create') {
      this.listDetail = this.input;
    }
    if (this.input.type === 'update') {
      this.ticketDetail = this.input;
      this.listComments = this.input.comments;
      Object.assign(this.newTicketForm, this.input);
    }
  }

  public onSave(): void {
    if (this.input.type === 'create') {
      const request: ITicketRequest = {
        ...this.newTicketForm,
        pos: this._onInitPosParams(),
        memberIds: [],
      };
      ticketService
        .create(request)
        .then((res: any) => {
          console.log(res);
          ngvModalService.close(true);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }

  public onEditComment(comment: IComment): void {
    const { content, id } = comment;
    this.currentCommentContent = content;
    this.currentCommentId = id;
    this.isEditComment = true;
  }

  public onComment(): void {
    if (!this.newComment) {
      return;
    }
    const req = {
      content: this.newComment,
      ticketId: this.ticketDetail ? this.ticketDetail.id : '',
      userId: this.userId,
    };
    commentService
      .create(req)
      .then((res: any) => {
        if (!res) {
          return;
        }
        this.newComment = '';
        this.listComments.push(res.data);
        toastrService.success('Notification', 'Add comment successfully!');
        location.reload();
      })
      .catch(() => {
        toastrService.error('Error', 'Add comment failed!');
      });
  }

  public onUpdateComment(): void {
    const req = {
      content: this.currentCommentContent,
      ticketId: this.ticketDetail ? this.ticketDetail.id : '',
      userId: this.userId,
    };
    commentService
      .update(this.currentCommentId, req)
      .then((res: any) => {
        if (!res) {
          return;
        }
        this.isEditComment = false;
        toastrService.success('Notification', 'Update comment successfully!');
      })
      .catch(() => {
        toastrService.error('Error', 'Update comment failed!');
      });
  }

  public onDeleteComment(id: string): void {
    const modalRef = ngvModalService.open(ConfirmModal, {
      title: 'Delete comment',
      msg: 'Are you sure you want to delete this comment?',
    });
    modalRef.then((result) => {
      if (result) {
        commentService
          .delete(id)
          .then((res: any) => {
            if (!res) {
              return;
            }
            this.isEditComment = false;
            toastrService.success(
              'Notification',
              'Delete comment successfully!'
            );
          })
          .catch(() => {
            toastrService.error('Error', 'Delete comment failed!');
          });
      }
    });
  }

  public onAddDescription(): void {
    if (!this.newTicketForm.description || !this.ticketDetail?.pos) {
      return;
    }
    const req = {
      title: this.ticketDetail.title,
      description: this.newTicketForm.description,
      pos: this.ticketDetail?.pos,
    };
    ticketService
      .description(req, this.ticketDetail.id)
      .then((res: any) => {
        if (!res) {
          return;
        }
        toastrService.success(
          'Notification',
          'Update description successfully!'
        );
        setTimeout(() => {
          location.reload();
        }, 500);
      })
      .catch(() => {
        toastrService.error('Error', 'Update description failed!');
      });
  }

  public updateTicketTitle(): void {
    if (!this.newTicketForm.title || !this.ticketDetail?.pos) {
      return;
    }
    const req = {
      title: this.newTicketForm.title,
      description: this.ticketDetail?.description,
      pos: this.ticketDetail?.pos,
    };
    ticketService
      .title(this.ticketDetail.id, req)
      .then((res: any) => {
        if (!res) {
          return;
        }
        toastrService.success('Notification', 'Update title successfully!');
        setTimeout(() => {
          location.reload();
        }, 500);
      })
      .catch(() => {
        toastrService.error('Error', 'Update title failed!');
      });
  }

  // ================================================================

  private _parseUser(): void {
    const userStr = localStorage.getItem('USER');
    if (!userStr) {
      return;
    }
    const user = JSON.parse(userStr);
    this.userId = user.id;
  }

  private _onSearching(): void {
    this.onSearch$.pipe(debounceTime(500)).subscribe((key: string) => {
      console.log(`search ${key}`);
      if (key.length !== 0) {
        searchService.searchUser(key).then((res: any) => {
          if (res.data) {
            this.users = res.data;
            this.users.forEach((user: IUser) => {
              user.label = user.username;
              user.value = user.id;
            });
          }
        });
      } else {
        return;
      }
    });
  }

  private _onInitPosParams(): string {
    let rs = '';
    const listLen = this.listDetail.tickets.length;
    if (listLen === 0) {
      rs = calcPosition('', '');
    } else {
      rs = calcPosition(this.listDetail.tickets[listLen - 1].pos, '');
    }
    return rs;
  }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss">
@import './NewTicket.scss';
</style>
