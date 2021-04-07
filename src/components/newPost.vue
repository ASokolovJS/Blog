<template>
  <div class="maind">
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
    <a href="/"><button  class="publick" @click="onSubmit">Опубликовать</button></a>
    <a href="/"><button>Назад</button></a>
  </div>
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
.maind{
  text-align: center;
  width:350px;
  position: absolute;
  margin:0 auto;
  left:0;
  right:0;

}
.publick{
  position: relative;
  max-width: 100%;
}
.title {
  position: relative;
  max-width: 100%;
  margin: 5px auto;
  width: 500px;
  height: 30px;
}
.sText {
  position: relative;
  width: 100%;
  height: 150px;
}
.fText {
  position: relative;
  max-width: 100%;
  width: 500px;
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