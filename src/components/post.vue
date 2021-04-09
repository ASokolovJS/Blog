<template>
  <div>
    <div class="post" v-for="posts of listPost" :key="posts.id">
      <a href="/viewPost" @click="idPost(posts.id)">
        <h1 class="titlePost">{{ posts.title }}</h1>
      </a>
      <h3>{{ posts.smallText }}</h3>
      <h4>Кол-во комментариев: {{ posts.coments.length }}</h4>
      <button @click="$emit('remove', posts.id)">Удалить пост</button>
    </div>
  </div>
 
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: mapGetters(["listPost",]),
  methods: {
    ...mapMutations(["showPosts",]),
    idPost(posts) {
      localStorage.idPosts = posts;
    },
  },
};
</script>

<style>
.post {
  text-align: center;
  margin-top: 25px;
  width:300px;
  margin:0 auto;
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 10px;
}
.titlePost{
   background: blanchedalmond;
}
</style>