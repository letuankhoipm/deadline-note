<template src="./NewTicket.html"></template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import {
  XIcon,
  CreditCardIcon,
  UserIcon,
  PencilIcon,
} from "@heroicons/vue/outline";
import NgvModalService from "@/services/ngv-modal.service";
import Multiselect from "@vueform/multiselect";
import { Subject } from "rxjs";
import { IUser } from "@/models/user.modal";
import { debounceTime } from "rxjs/operators";
import searchService from "@/services/search.service";
import ticketService from "@/services/ticket.service";
import calcPosition from "@/utils/calc-pos";
import { ITicket, ITicketRequest } from "@/models/board.model";
import ngvModalService from "@/services/ngv-modal.service";

@Options({
  components: {
    XIcon,
    CreditCardIcon,
    Multiselect,
    UserIcon,
    PencilIcon,
  },
  props: ["input"],
  methods: {
    onCreate(): void {
      const request: ITicketRequest = {
        ...this.newTicketForm,
        pos: this._onInitPosParams(),
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
      console.log(request);
    },
  },
  created() {
    this.listDetail = this.input;
    console.log(this.listDetail);
    this.newTicketForm.listId = this.input?.id;
    this._onSearching();
  },
  data() {
    return {
      newTicketForm: {
        title: "",
        description: "",
        pos: "",
        listId: "",
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
  public priorityLabel = [
    { label: "Done", value: 0 },
    { label: "Proccessing", value: 1 },
    { label: "Cancel", value: 2 },
  ];
  public users = [];
  public listDetail: any;
  public onSearch$ = new Subject<any>();

  private _currListId = "";
  private _currTicketId = "";

  public text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  public onCancel(): void {
    NgvModalService.dismiss();
  }

  public onTyping(event: Event): void {
    const searchField = event;
    this.onSearch$.next(searchField);
  }

  // ================================================================

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
    if (this.listDetail.tickets) {
      let rs = "";
      const listLen = this.listDetail.tickets.length;
      if (listLen === 0) {
        rs = calcPosition("", "");
      } else {
        rs = calcPosition(this.listDetail.tickets[listLen - 1].pos, "");
      }
      return rs;
    } else {
      return "";
    }
  }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss">
@import "./NewTicket.scss";
</style>