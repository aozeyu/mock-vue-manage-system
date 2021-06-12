import { createStore } from 'vuex'

export default createStore({
  state: {
    collapse: false,
    tagsList: [{ title: 'vuesadsasadsadasdsad', path: 'https://lin-xin.gitee.io/images/post/wms.png' }]
  },
  mutations: {
    handlecollapse (state, data) {
      state.collapse = data
    }
  },
  actions: {
  },
  modules: {
  }
})
