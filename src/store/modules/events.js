import axios from "axios";

const state = {
  events: [],
  specificEvent: []
};

const getters = {
  allEvents: state => state.events,
  oneEvent: state => state.specificEvent
};

// makes request, gets response, then calls mutation bc we use commit to make mutation... dont clal mutation directly

const actions = {
  async fetchEvents({ commit }) {
    const response = await axios.get("http://localhost:3000/events");
    commit("setEvents", response.data);
    console.log(response.data);
  },

  async getEvent({ commit }, id) {
    const response = await axios.get("http://localhost:3000/events/" + id);
    commit("returnEvent", response.data);
  }
};

const mutations = {
  setEvents: (state, events) => (state.events = events),
  returnEvent: (state, specificEvent) => (state.specificEvent = specificEvent)
};

export default {
  state,
  getters,
  actions,
  mutations
};
