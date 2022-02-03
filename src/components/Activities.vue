<template>
  <div class="container px-4">
    <li class="bg-gray-200 shadow-sm rounded-md md:space-x-5 m-4">
      <span class="text-lg text-gray-500">{{ activity.name }}</span>
      <span>{{ emojis[0] }}</span>
      <button
        class="bg-white shadow-md rounded-full m-3 px-2 py-2 md:px-3 md:py-2 md:m-3"
      >
        👎
      </button>
      {{ activity.rating }}
      <button
        class="bg-white shadow-md rounded-full m-3 px-2 py-2 md:px-3 md:py-2 md:m-3"
      >
        👍
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Activities",
  props: ["activity", "emojis"],
};
</script>

<style></style>
