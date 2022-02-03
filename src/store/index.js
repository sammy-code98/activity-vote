/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activities: [],
    emojis: { yay: "🤩", nice: "😀", meh: "😐", argh: "🤬", hateIt: "💩" },
  },
  mutations: {
    increment(state, activityName) {
      state.activities
        .filter((activity) => activity.name === `${activityName}`)
        .map((activity) => activity.rating++);
      // console.log("increment");
    },
    decrement(state, activityName) {
      state.activities
        .filter((activity) => activity.name === `${activityName}`)
        .map((activity) => activity.rating--);
      // console.log("decrement");
    },
    addActivity(state, name) {
      state.activities.push({ name, rating: 0 });
    },
  },
  actions: {},
  modules: {},
});
