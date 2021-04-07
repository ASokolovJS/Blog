import Vue from 'vue'
import Vuex from 'vuex'
import createPost from "./modules/createPost"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      createPost,
  }
})
