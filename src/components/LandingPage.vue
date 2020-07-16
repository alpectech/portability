<template>
  <div class="flex flex-col flex-wrap flex-auto bg-gray-100 md:hidden">
    <div class="px-4 py-4 font-sans text-justify text-gray-500">
      <p class="text-center text-gray-600 bg-white">::portability, your moving companion::</p>
      <p class="bg-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis dolor risus, non interdum turpis congue non. Nulla placerat pulvinar viverra.
        Nam molestie nisl lacus, nec lacinia magna sodales vitae.
        Donec enim metus, accumsan id viverra vel, condimentum sit amet libero. Vivamus nulla mauris, lobortis sit amet lectus ut, dictum elementum dolor.
      </p>
    </div>
    <div class="flex flex-row flex-wrap items-center my-2">
      <div class="w-1/2 text-center">
        <i class="w-full fas fa-truck-moving"></i>
        <a class="btn" href="/move">MOVE</a>
      </div>
      <div class="items-center w-1/2 text-center border-4 border-white">
        <i class="w-full fas fa-warehouse"></i>
        <a class="btn" href="/store">STORE</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      key: ""
    };
  },
  computed: mapGetters(["getKey"]),
  created() {
    this.$store.dispatch("fetchKey");
  }
};
</script>
