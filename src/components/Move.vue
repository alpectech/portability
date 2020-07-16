<template>
  <div class="bg-scroll md:hidden flex flex-col bg-gray-100" >
      <input type="text" name="to" v-model="to" placeholder="where to.." class="input mx-auto" autocomplete="off">
      <button type="button" name="button" @click="distanceMatrix" class="btn w-1/2 mx-auto">distance</button>
      <div class="text-center mt-6">Choose your load</div>
      <div class="flex flex-row justify-center">
        <select class="w-1/2 my-3" v-model="load">
          <option value="1">Full container</option>
          <option value="2">Less than container</option>
          <option value="3">Truck</option>
          <option value="4">Less than truck</option>
          <option value="5">Pickup</option>
          <option value="6">Less than pickup</option>
        </select>
      </div>
      <button type="button" name="button" @click="chooseLoad" class="w-1/2 mx-auto btn">choose load</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data(){
    return {
      distance:'',
      from:'',
      to: '',
      load: '',
      currentLocationCoords: {}
    }
  },
  methods: {
    getCurrentLocationSuccess(pos){
      this.currentLocationCoords = pos.coords;
      this.convertToReadableLocation();
    },
    getCurrentLocation() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(this.getCurrentLocationSuccess, error, options);
    },
    async convertToReadableLocation(){
      //Reverse Geocoding API
      console.log("this.getKey:", this.getKey);
      const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.currentLocationCoords.latitude},${this.currentLocationCoords.longitude}&key=${this.getKey}`);
      if (res.status != 200) {
        console.log(res.status);
      } else {
        this.from = (await res.json()).results[0].address_components[1].long_name;
        console.log("readable current location:", this.from);
      }
    },
    distanceMatrix(){
      let from = this.from.concat(', Nairobi'), to = this.to.concat(', Nairobi');
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${from}&destinations=${to}&key=${this.getKey}`)
        .then(response=>response.json())
        .then(data=>this.distance = data.rows[0].elements[0].distance.value)
        .catch(err=>console.log(err));
        alert('DISTANCE: '+this.distance+' metres');
      },
      chooseLoad(){
        console.log('Load chosen:', this.load);
      }
  },
  computed: mapGetters(['getKey']),
  created(){
    this.$store.dispatch('fetchKey')
  },
  mounted() {
    this.getCurrentLocation();
  }
};
</script>
