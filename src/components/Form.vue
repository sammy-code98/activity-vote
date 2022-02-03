<template>
  <div class="container">
    <div>
      <form class="md:flex md:flex-row">
        <input
          type="text"
          placeholder="Add Activity"
          class="shadow-lg border rounded px-3 py-2 w-full border-gray-500"
        />
        <button
          class="bg-blue-600 shadow-lg text-white mt-6 p-2 rounded md:px-8 md:mt-0 md:p-0 md:mx-2"
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
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
