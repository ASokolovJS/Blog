<template>
  <div>
    <h1 class="edPost">Тут можно от Редактировать свой пост</h1>
    <div class="edits">
      <div>
        <input class="textTitle" v-model="fPost.title" />
      </div>
      <div>
        <input class="smallText" v-model="fPost.smallText" />
      </div>
      <div>
        <input class="fullText" v-model="fPost.fullText" />
      </div>
      <button v-on:click="result(fPost.title)">Сохранить изменения</button>
      <a href="/viewPost"><button v-on:click='show()'>Назад</button></a>
    </div>
  </div> 
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "ff",
      smallText: "",
      fullText: "",
    };
  },
  computed: mapGetters(["fPost"]),
  methods: {
    ...mapMutations(["showFullPost", "editPost"]),
    result() {
      this.editPost({
        title: this.fPost.title,
        smallText: this.fPost.smallText,
        fullText: this.fPost.fullText,
      });
    },
    show() {
      this.showFullPost();
    },
  },
  beforeMount() {
    this.show();
  },
};
</script>
<style>
.edPost{
  text-align: center;
}
.edits{
  width: 400px;
  position: absolute;
  margin:0 auto;
  left:0;
  right:0;
}
.textTitle {
  width: 100%;
  height: 30px;
}
.smallText{
  width: 100%;
  height: 100px;
}
.fullText{
  width: 100%;
  height: 300px;
}
</style>