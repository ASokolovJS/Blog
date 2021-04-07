<template>
  <div>
    <newPost />
  </div>
  
</template>

<script>
import newPost from "@/components/newPost.vue";
export default {
  components:{
    newPost,
  },
  
}
</script>

<style>
.back{
  position: relative;
  left: 50%;
}
</style>