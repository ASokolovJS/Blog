<template>
  <div id="app">
    <h1 class="title">The Mini-Blog</h1>
    <hr>
    <router-view />
  </div> 
</template>

<script>
export default {
  name: 'App',
  components: {
   
  },
  
}
</script>

<style>
.button{
  position: relative;
  left: 50%;
}
.title{
  background: blanchedalmond;
  text-align: center;
}
</style>>
