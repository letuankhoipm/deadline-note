<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
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

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        <i class="fas fa-times"></i>
      </span>

      <div
        class="
          inline-block
          align-bottom
          bg-white
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
        "
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="w-full">
            <div class="mt-3 text-center sm:mt-0 sm:text-left">
              <div class="grid grid-cols-2">
                <div class="col-span">
                  <h1 style="font-size: 25px" class="font-bold uppercase">
                    Registration
                  </h1>
                </div>
                <div class="col-span text-right">
                  <XIcon
                    @click="cancel()"
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
                <form>
                  <div class="w-full my-4">
                    <p class="text-sm text-gray-500">Full-name</p>
                    <input v-model="regisForm.fullname" type="text" />
                  </div>
                  <div class="w-full my-4">
                    <p class="text-sm text-gray-500">Email</p>
                    <input v-model="regisForm.email" type="email" />
                  </div>
                  <div class="w-full my-4">
                    <p class="text-sm text-gray-500">Password</p>
                    <input v-model="regisForm.password" type="password" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="register()" class="btn-ps btn-ps-raise btn my-2">
            sign-up
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RegisterRequest } from "@/models/login-request.model";
import NgvModalService from "@/services/ngv-modal.service";
import { XIcon } from "@heroicons/vue/outline";
import authService from "@/services/auth.service";
import toastrService from "@/services/toastr.service";
import ngvModalService from "@/services/ngv-modal.service";

@Options({
  props: {},
  components: { XIcon },
  data() {
    return {
      regisForm: {
        fullname: null,
        email: null,
        password: null,
      } as unknown as RegisterRequest,
    };
  },
})
export default class RegisterModal extends Vue {
  get regisForm(): RegisterRequest {
    return this.regisForm;
  }

  public cancel(): void {
    NgvModalService.dismiss();
  }

  public register(): void {
    const data = {
      ...this.regisForm,
    };
    authService
      .register(data)
      .then((res) => {
        if (!res) {
          return;
        }
        ngvModalService.close(true);
        toastrService.success("Notification", "Register Successfully!");
      })
      .catch((err: any) => {
        toastrService.error("Error", err.message);
      });
  }
}
</script>
