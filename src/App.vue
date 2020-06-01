<template>
  <div id="app">
    <nav>
      <h1>portability</h1>
    </nav>
    <LandingPage></LandingPage>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  components:{
    LandingPage
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
:root {
  font-family: "Courier New", monospace;
}
nav {
  font-variant: small-caps;
  text-align: center;
}
</style>
