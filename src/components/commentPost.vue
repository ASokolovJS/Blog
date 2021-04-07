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
    <div>
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
.comment {
  box-sizing: border-box;
  border: 1px solid #000;;
  right: 50px;
}
.commentPost {
 display: flex;
}
.list {
  margin: 20px;
}
</style>