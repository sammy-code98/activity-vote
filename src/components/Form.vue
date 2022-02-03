<template>
  <div class="container">
    <div>
      <form class="md:flex md:flex-row" @submit="onSubmit">
        <input
          type="text"
          v-model="activityName"
          placeholder="Add Activity"
          class="shadow-lg border rounded px-3 py-2 w-full border-gray-500 font-custom"
        />
        <button
          class="font-custom bg-blue-600 shadow-lg text-white mt-6 p-2 rounded md:px-8 md:mt-0 md:p-0 md:mx-2"
        >
          Add Activity
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      activityName: "",
    };
  },
  methods: {
    addActivity(activityName) {
      this.$store.commit("addActivity", activityName);
    },
    onSubmit(e) {
      e.preventDefault();
      this.addActivity(this.activityName);
      this.activityName = "";
    },
  },
};
</script>
