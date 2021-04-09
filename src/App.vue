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
button{
  background: #ffebcd;
  color:#000000;
  text-align:center;
  border-radius: 15px;
}

.title{
  background: #ffebcd;
  text-align: center;
}
</style>>
