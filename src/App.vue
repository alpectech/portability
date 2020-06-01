<template>
  <div id="app">
    <nav>
      <h1>portability</h1>
    </nav>
    <landingPage></landingPage>
  </div>
</template>

<script>
import landingPage from './components/LandingPage.vue'

export default {
  components:{
    'landingPage':landingPage
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
