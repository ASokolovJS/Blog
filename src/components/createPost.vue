<template>
  <form href="/" @submit.prevent="onSubmit">
    <input class="title" type="text" placeholder="Заголовок" v-model="title" />
    <textarea
      class="sText"
      type="text"
      placeholder="Краткое описание"
      v-model="smallText"
    ></textarea>
    <textarea
      class="fText"
      type="text"
      placeholder="Полное описание"
      v-model="fullText"
    ></textarea>
    <button type="submit">Опубликовать</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      id: "",
      title: "",
      smallText: "",
      fullText: "",
      coments: [],
    };
  },
  methods: {
    ...mapMutations(["addPost"]),
    onSubmit() {
      this.addPost({
        id: Date.now(),
        title: this.title,
        smallText: this.smallText,
        fullText: this.fullText,
        coments: this.coments,
      });
    },
  },
};
</script>

<style scoped>
form {
  width: 300px;
  height: 300px;
}
.title {
  margin: 5px auto;
  width: 270px;
  height: 30px;
}
.sText {
  width: 270px;
  height: 150px;
}
.fText {
  width: 270px;
  height: 300px;
}
.posts {
  width: 300px;
  height: 500px;
  margin: 10px auto;
  box-sizing: border-box;
  border: 1px solid #000000;
}
</style>