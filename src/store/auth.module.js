/* eslint-disable no-shadow */
import { UPDATE_USER } from './actions.type';
import { SET_USER } from './mutations.type';

const state = {
  user: null,
  test: true,
};

const getters = {
  user: (state) => state.user,
};

export const actions = {
  async [UPDATE_USER](context, user) {
    context.commit(SET_USER, user);
  },
};

const mutations = {
  [SET_USER](state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
