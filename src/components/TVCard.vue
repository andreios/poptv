// Name:  Andrew Luehrs
// Class: CIS131-W01
// Date:  11-01-2020
// Assn:  VueCLI/Axios Popular TV Shows

//Card template, using Bootstrap.
<template>
  <div>
      <img v-bind:src="baseURL + show.poster_path" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ show.title }}</h5>
        <p class="card-text">{{ show.overview }}</p>
      </div>
  </div>
</template>

<script>
//Component definition
export default {
  name: "TVCard",
  props: ["show", "baseURL"],
};
</script>