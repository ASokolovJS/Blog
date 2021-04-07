<template>
  <div>
    <div>
      <a href="/"><button v-on:click='show()'>Назад</button></a>
      <span class="title">
        <h1>{{ fPost.title }}</h1>
      </span>
      <span class="fullText">
        <h3>{{ fPost.fullText }}</h3>
      </span>
      <hr>
      <commentPost/>
    </div>
  </div>
</template>
<script>
let a = localStorage.idPost
import commentPost from '@/components/commentPost'
import {mapGetters, mapMutations} from 'vuex'
export default {
  components: {
    commentPost,
  },
  computed: mapGetters(["listPost", 'fPost']),
  methods:{
    ...mapMutations (['showPosts', 'showFullPost']),
    show(){
      this.showPosts()
      this.showFullPost()

    }
  },
  beforeMount(){
    this.show();
  }
}
</script>
<style scoped>
.title{
text-align: center;
}
.fullText{

text-align: center;
}

</style>