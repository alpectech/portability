<template>
  <div class="bg-scroll md:hidden flex flex-col bg-gray-100" >
      <input type="text" name="from" v-model="from" placeholder="where from.." class="input mx-auto" autocomplete="off">
      <input type="text" name="to" v-model="to" placeholder="where to.." class="input mx-auto" autocomplete="off">
      <button type="button" name="button" @click="distanceMatrix" class="btn w-1/2 mx-auto">distance</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data(){
    return {
      distance:'',
      from:'',
      to: ''
    }
  },
  methods: {
    display(){
      alert('DISTANCE: '+this.distance+' metres');
    },
    distanceMatrix(){
      let from = this.from.concat(', Nairobi'), to = this.to.concat(', Nairobi');
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${from}&destinations=${to}&key=${this.getKey}`)
        .then(response=>response.json())
        .then(data=>this.distance = data.rows[0].elements[0].distance.value)
        .catch(err=>console.log(err));
      },
  },
  computed: mapGetters(['getKey']),
  created(){
    this.$store.dispatch('fetchKey')
  },
};
</script>
