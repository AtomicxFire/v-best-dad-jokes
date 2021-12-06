export const state = () => ({
  id: 1,
  all: [],
})


export const actions = {
  async getPosts({ commit, state }) {
    this.$getAll("posts")
      .then(response => {
        commit('setPosts',  response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const mutations = {
  setPosts(state, posts) {
    state.all = posts
  }
}
