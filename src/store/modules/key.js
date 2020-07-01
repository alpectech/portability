const state = {
  key: ''
};

const getters = {
  getKey: state => state.key
};

const actions = {
  async fetchKey({ commit }){
    const response = await fetch('http://localhost:3000/key')
    .then(data=>data.json())
    .then(data => JSON.parse(data).key)
    .catch((err) => {
      console.error(err)
    });
    commit('setKey', response);
  }
};

const mutations = {
  setKey: (state, key) => state.key = key
};

export default {
  state,
  getters,
  actions,
  mutations
};
