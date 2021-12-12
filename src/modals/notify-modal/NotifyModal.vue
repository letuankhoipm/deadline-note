<template>
  <div class="dnl-modal">
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block sm:p-0
        "
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>
        <div
          class="
            inline-block
            align-bottom
            bg-white
            overflow-hidden
            shadow-xl
            transform
            transition-all
            sm:my-8 sm:align-middle sm:max-w-xl sm:w-full
          "
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="w-full">
              <div class="mt-3 text-center sm:mt-0 sm:text-left">
                <div class="grid grid-cols-2">
                  <div class="col-span">
                    <h1 style="font-size: 25px" class="font-bold uppercase">
                      {{ input?.title }}
                    </h1>
                  </div>
                  <div class="col-span text-right">
                    <XIcon
                      @click="onClose()"
                      class="
                        h-5
                        w-5
                        float-right
                        leading-8
                        self-center
                        cursor-pointer
                      "
                    />
                  </div>
                </div>
                <div class="mt-2">
                  <p>
                    {{ input?.msg }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="onClose()" class="btn-ps btn-ps-raise btn my-2">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import ngvModalService from "@/services/ngv-modal.service";
@Options({
  components: {},
  props: ["input"],
  methods: {},
  data() {
    return {};
  },
})
export default class NotifyModal extends Vue {
  get input(): any {
    return this.input;
  }
  public onClose(): void {
    ngvModalService.dismiss(true);
  }
}
</script>

<style lang="scss"></style>
