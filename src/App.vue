<template>
  <div id="app">
    <Form />
    <div class="mt-6">
      <ul>
        <Activities
          v-for="item in activities"
          v-bind:activity="item"
          v-bind:emojis="emojis"
          v-bind:key="item.name"
          v-bind:increment="increment"
          v-bind:decrement="decrement"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Activities from "./components/Activities.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Form,
    Activities,
  },
  computed: mapState({
    activities: (state) => state.activities,
    emojis: (state) => state.emojis,
  }),
  methods: {
    increment(activityName) {
      this.$store.commit("increment", activityName);
    },
    decrement(activityName) {
      this.$store.commit("decrement", activityName);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
