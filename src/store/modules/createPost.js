export default {
  actions: {},
  mutations: {
    showComent(state) {
      state.temp = JSON.parse(localStorage.postlist);
      state.coment = state.temp[localStorage.idPost].coments;
    },
    showPosts(state) {
      if (localStorage.postlist == null) {
        localStorage.postlist = JSON.stringify(state.post);
      } else {
        state.post = JSON.parse(localStorage.postlist);
      }
    },
    showFullPost(state) {
      if (localStorage.postlist == null) {
        let id = localStorage.idPosts;
        localStorage.idPost = state.fullPost.findIndex((i) => i.id == id);
        state.fullPost = state.fullPost[localStorage.idPost];
      } else {
        state.fullPost = JSON.parse(localStorage.postlist);
        let id = localStorage.idPosts;
        localStorage.idPost = state.fullPost.findIndex((i) => i.id == id);
        state.fullPost = state.fullPost[localStorage.idPost];
      }
    },
    addPost(state, newPost) {
      if (localStorage.postlist == null) {
        state.post.push(newPost);
        localStorage.postlist = JSON.stringify(state.post);
        state.post = JSON.parse(localStorage.postlist);
      } else {
        state.post = JSON.parse(localStorage.postlist);
        state.post.push(newPost);
        localStorage.postlist = JSON.stringify(state.post);
        state.post = JSON.parse(localStorage.postlist);
      }
    },
    removePost(state, id) {
      state.post = JSON.parse(localStorage.postlist);
      let ind = state.post.findIndex((i) => i.id == id);
      state.post.splice(ind, 1);
      localStorage.postlist = JSON.stringify(state.post);
    },
    addComment(state, newComent) {
      state.coment.push(newComent);
      state.temp = JSON.parse(localStorage.postlist);
      state.temp[localStorage.idPost].coments = state.coment;
      localStorage.postlist = JSON.stringify(state.temp);
    },
    removeComment(state, id) {
      state.remComent = JSON.parse(localStorage.postlist);
      state.remComent[localStorage.idPost].coments = [];
      localStorage.postlist = JSON.stringify(state.remComent);
    },
    editPost(state, edit) {
      state.post = JSON.parse(localStorage.postlist);
      state.post = state.post[localStorage.idPost];
      state.post.title = edit.title;
      state.post.smallText = edit.smallText;
      state.post.fullText = edit.fullText;
      state.temp = JSON.parse(localStorage.postlist);
      state.temp[localStorage.idPost] = state.post;
      localStorage.postlist = JSON.stringify(state.temp);
    },
  },
  state: {
    post: [],
    fullPost: [],
    coment: [],
    temp: [],
    remComent: [],
  },
  getters: {
    sumComs(state) {
      return state.sumCom;
    },
    fPost(state) {
      return state.fullPost;
    },
    listPost(state) {
      return state.post;
    },
    comentsPost(state) {
      return state.coment;
    },
  },
};
