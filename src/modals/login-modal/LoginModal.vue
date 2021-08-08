<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >&#8203;</span>

      <div class="inline-block align-bottom bg-white overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="w-full">
            <div class="mt-3 text-center sm:mt-0 sm:text-left">
              <div class="grid grid-cols-2">
                <div class="col-span">
                  <h1
                    style="font-size: 25px"
                    class="font-bold uppercase"
                  >Login</h1>
                </div>
                <div class="col-span text-right">
                  <i
                    @click="$emit('exit', true)"
                    style="line-height: 2.5"
                    class="fas fa-times cursor-pointer"
                  ></i>
                </div>
              </div>
              <div class="mt-2">
                <form>
                  <div class="w-full my-4">
                    <p class="text-sm text-gray-500">
                      Email
                    </p>
                    <input type="email">
                  </div>
                  <div class="w-full my-4">
                    <p class="text-sm text-gray-500">
                      Password
                    </p>
                    <input type="password">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button class="btn-ps btn-ps-raise btn my-2">next</button>
          <button class="btn-ps btn-ps-flat btn my-2">forgot password</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  // Module
  props: {}, // Input
  components: {}, // Import component
})
export default class LoginModal extends Vue {}
</script>