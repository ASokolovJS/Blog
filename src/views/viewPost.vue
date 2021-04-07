<template>
  <div>
    <div>
      <span class="title">
        <h1>{{ fPost.title }}</h1>
      </span>
      <span class="fullText">
        <h3>{{ fPost.fullText }}</h3>
      </span>
      <hr>
       <a href="/editPost"><button>Редактировать пост</button></a><br>
      <a href="/"><button v-on:click="show()">Назад</button></a>
      <hr />
      <commentPost />
    </div>
  </div>
</template>

<script>
import commentPost from "@/components/commentPost";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    commentPost,
  },
  computed: mapGetters(["listPost", "fPost"]),
  methods: {
    ...mapMutations(["showPosts", "showFullPost"]),
    show() {
      this.showFullPost();
    },
  },
  beforeMount() {
    this.show();
  },
};
</script>
<style scoped>
.back{
  position: relative;
  
}
.title {
 
  text-align: center;
}
.fullText {
  text-align: center;
}
</style>