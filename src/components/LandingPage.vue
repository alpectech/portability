<template>
  <div id="google-static-map"></div>
</template>

<script>
export default {
  methods: {
    async getKey() {
      const res = await fetch("http://localhost:3000/key");
      if (res.status == 404) {
        console.log("404 Error: Not Found");
      } else {
        const getKey = JSON.parse(await res.json()).key;
        var staticMapImg = document.createElement("img");
        staticMapImg.setAttribute(
          "src",
          `https://maps.googleapis.com/maps/api/staticmap?center=Westlands,Nairobi&zoom=13&size=512x740&maptype=roadmap&scale=1&format=png&style=feature:road.highway|element:geometry|visibility:simplified|color:0xc280e9&style=feature:transit.line|visibility:simplified|color:0xbababa&style=feature:road.highway|element:labels.text.stroke|visibility:on|color:0xb06eba&style=feature:road.highway|element:labels.text.fill|visibility:on|color:0xffffff&key=${getKey}&markers=color:blue|label:S|40.702147,-74.015794&markers=color:green|label:G|40.711614,-74.012318`
        );
        var staticMapDiv = document.getElementById("google-static-map");
        staticMapDiv.appendChild(staticMapImg);
      }
    }
  },
  beforeMount() {
    this.getKey();
  }
};
</script>

<style lang="scss">
</style>
