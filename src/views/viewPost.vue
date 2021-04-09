<template>
  <div>
    <div>
      <span class="title">
        <h1>{{ fPost.title }}</h1>
        <hr class="line">
      </span>
      <span class="fullText">
        <h3>{{ fPost.fullText }}</h3>
      </span>
      <hr class="line" />
      <div class="buttonPost">
        <a href="/editPost">
          <button>Редактировать пост</button>
        </a>
        <a href="/">
          <button class="bBack" v-on:click="show()">Вернуться назад</button>
        </a>
      </div>
      <hr />
    </div>
    <commentPost />
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
.line{
  width: 350px;
}
.bBack {
  margin-left: 5px;
}
.buttonPost {
  max-width: 280px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back {
  position: relative;
}
.title {
  text-align: center;
}
.fullText {
  text-align: center;
}
</style>