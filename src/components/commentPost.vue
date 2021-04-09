<template>
  <div class="commentPost">
    <div class="comment">
      <input type="text" placeholder="Ваше имя" v-model="author" /><br />
      <textarea
        type="text"
        placeholder="Ваш комментарий"
        v-model="coment"
      /><br />
      <button @click="addCom()">Отправить</button>
    </div>
    <div class="remDiv">
      <removeComent />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import removeComent from "@/components/removeComent.vue";
export default {
  data() {
    return {
      id: "",
      author: "",
      coment: "",
    };
  },
  computed: mapGetters(["comentsPost"]),
  components: {
    removeComent,
  },
  props: ["listId"],
  methods: {
    ...mapMutations(["addComment", "showComent"]),
    addCom() {
      this.addComment({
        id: Date.now(),
        author: this.author,
        coment: this.coment,
      });
      this.author = "";
      this.coment = "";
    },
    showComents() {
      this.showComent();
    },
  },
  beforeMount() {
    this.showComents();
  },
};
</script>

<style>
.remDiv{
  margin-top: 80px;
}
.comment {
  text-align: center;
  width: 600px;
  position: absolute;
  margin:0 auto;
  left:0;
  right:0;
  box-sizing: border-box;  
}

.commentPost {
  display: flex;
  flex-direction: column;
}
.list {
  margin: 20px;
}
</style>