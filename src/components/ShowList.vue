// Name:  Andrew Luehrs
// Class: CIS131-W01
// Date:  11-01-2020
// Assn:  VueCLI/Axios Popular TV Shows

//Show list template, using Bootstrap. Creates an instance of TVCard for each
//show in the array.
<template>
  <div class="card-group">
    <div class="card" style="width: 18rem" v-for="show in showList" v-bind:key=show.id>
        <TVCard v-bind:show="show" v-bind:baseURL="baseURL" />
    </div>
  </div>
</template>

<script>
//component definition.
import TVCard from "./TVCard.vue";
export default {
    name: "ShowList",
    props: ['showList', 'baseURL'],
    components: {
        TVCard
    }
}
</script>