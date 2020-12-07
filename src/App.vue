// Name:  Andrew Luehrs
// Class: CIS131-W01
// Date:  11-01-2020
// Assn:  VueCLI/Axios Popular TV Shows

//Root app template.  Contains instance of the Header and the card list.
<template>
  <div id="app">
    <Header title="This Week's Popular TV" />
    <ShowList v-bind:showList="shows" v-bind:baseURL="baseURL" />
  </div>
</template>

<script>
//Import necessary subcomponents
import Header from "./components/Header.vue";
import ShowList from "./components/ShowList.vue";
import axios from "axios";

//Constant to control number of items returned.
const DISPLAY_NUM = 4;

//App definition
export default {
  name: "App",
  props: [ "baseURL" ],
  components: {
    Header,
    ShowList,
  },
  data() {
    return {
      //array for shows; populated by Axios call below.
      shows: [ ],
    };
  },
  mounted() {
    //first call retrives the base URL from the configuration API
    axios
      .get(
        "https://api.themoviedb.org/3/configuration?api_key=8f434b1b72c4cba4671daad069563667"
      )
      .then((result) => {
        this.baseURL = result.data.images.base_url;
        this.baseURL += result.data.images.poster_sizes[2];
      });

    //second call retrieves list of shows
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=8f434b1b72c4cba4671daad069563667&language=en-US&page=1"
      )
      .then((response) => {
        this.shows = response.data.results.slice(0, DISPLAY_NUM); //using the slice() method to store only the first n number of shows
      });
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
