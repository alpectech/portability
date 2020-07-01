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
        <a class="btn" href="/#/move">MOVE</a>
      </div>
      <div class="items-center w-1/2 text-center border-4 border-white">
        <i class="w-full fas fa-warehouse"></i>
        <a class="btn" href="/#/store">STORE</a>
      </div>
    </div>
    <div class="h-16" id="google-static-map">
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
  methods: {
    staticMap() {
      const staticMapImg = document.createElement("img");
      staticMapImg.setAttribute(
        "src",
        `https://maps.googleapis.com/maps/api/staticmap?center=Westlands,Nairobi&zoom=13&size=512x242&maptype=roadmap&scale=1&format=png&style=feature:road.highway|element:geometry|visibility:simplified|color:0xc280e9&style=feature:transit.line|visibility:simplified|color:0xbababa&markers=color:blue|label:S|40.702147,-74.015794&markers=color:green|label:G|40.711614,-74.012318&key=${this.getKey}`
      );
      const staticMapDiv = document.getElementById("google-static-map");
      staticMapDiv.appendChild(staticMapImg);
    },
    getCurrentLocation() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      function success(pos) {
        var crd = pos.coords;

        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  },
  computed: mapGetters(["getKey"]),
  created() {
    this.$store.dispatch("fetchKey");
  },
  mounted() {
    this.staticMap();
    this.getCurrentLocation();
  }
};
</script>

<style lang="scss">

</style>
