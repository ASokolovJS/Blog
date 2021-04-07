<template>
  <div>
    <a href="/createPost">
      <button class="button">Новый Пост</button>
    </a> 
    <ol>
      <post @remove="remove" />
    </ol>
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

<style>
</style>