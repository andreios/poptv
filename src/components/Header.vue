// Name:  Andrew Luehrs
// Class: CIS131-W01
// Date:  11-01-2020
// Assn:  VueCLI/Axios Popular TV Shows

//Header template.
<template>
    <div class="header">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
//component definition
export default {
    name: "Header",
    props: ['title']
}
</script>

<style scoped>
/* styling for header */
.header {
    background: rgb(49, 76, 117);
    color: white;
    text-align: center;
    padding: 10px;
    margin: 0px;
}
</style>