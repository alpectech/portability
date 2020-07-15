<template>
  <div id="app">
    <nav class="h-18">
      <h1 class="font-hairline font-thin text-2xl text-center text-gray leading-loose antialised pb-2 uppercase">portability</h1>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  components:{
    LandingPage
  }
}
</script>

<style lang="scss">
  @tailwind base;
  @tailwind components;
  .btn {
    @apply inline-block px-4 py-2 rounded-lg shadow-lg bg-indigo-700 text-white;
  }
  .input {
    @apply border rounded-md my-2 w-3/4;
  }
  @tailwind utilities;
</style>
