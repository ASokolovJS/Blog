<template>
  <div>
    <div class="button">
      <a href="/createPost">
        <button >Новый Пост</button>
      </a>
    </div>
    <div>
      <post @remove="remove" />
    </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import post from "@/components/post.vue";

export default {
  components: {
    post,
  },
  methods: {
    ...mapMutations(["showPosts", "removePost"]),
    show() {
      this.showPosts();
    },
    remove(id) {
      this.removePost(id);
      this.show();
    },
  },
  beforeMount() {
    this.show();
  },
};
</script>

<style scoped>
.button{
  width: 100px;
  height: 50px;
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>