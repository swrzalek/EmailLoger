/* eslint-disable no-shadow */
import { FETCH_LOGS } from './actions.type';
// eslint-disable-next-line import/no-cycle
import { fbsFetchLogs } from '../utils/firebase.service';
import { SET_LOGS } from './mutations.type';

export const state = {
  logs: [],
};

export const getters = {
  allLogs(state) {
    return state.logs.filter((log) => log.email);
  },
};

export const actions = {
  async [FETCH_LOGS](context) {
    await fbsFetchLogs().then((logs) => context.commit(SET_LOGS, logs));
  },
};

export const mutations = {
  [SET_LOGS](state, logs) {
    state.logs = logs;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
