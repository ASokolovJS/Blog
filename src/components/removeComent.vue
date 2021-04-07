<template>
  <div class="main">
    <h2>Комментарии:</h2>
    <div class="listcomment">
      <li v-for='coments of comentsPost' :key="coments.id">
        {{coments.author}} : {{coments.coment}}
      </li>
    </div>
    <hr>
    <button class="but" @click="remCom()">Удалить комментарии</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  computed: mapGetters (['comentsPost']),
  methods: {
    ...mapMutations (['removeComment', 'showComent']),
     remCom() {
      this.removeComment();
      this.showComent()
    },
  }
}
</script>

<style>
.main{
  text-align: center;
  width: 600px;
  position: absolute;
  margin:0 auto;
  left:0;
  right:0;
  box-sizing: border-box;
  border: 2px solid #000000;
}
.but{
margin: 20px auto;
}

</style>