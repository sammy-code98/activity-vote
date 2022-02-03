<template>
  <div class="container px-4">
    <li class="bg-gray-200 shadow-sm w-full rounded-md md:space-x-5 md:m-4">
      <span class="text-lg text-gray-500"
        >{{ activity.name }}
        <span v-if="activity.rating <= -5">{{ emojis.hateIt }}</span>
        <span v-else-if="activity.rating <= -3">{{ emojis.argh }}</span>
        <span v-else-if="activity.rating < 3">{{ emojis.meh }}</span>
        <span v-else-if="activity.rating < 5">{{ emojis.nice }}</span>
        <span v-else>{{ emojis.yay }}</span>
        <button
          class="bg-white shadow-md rounded-full m-3 px-2 py-2 md:px-3 md:py-2 md:m-3"
          @click="decrement(activity.name)"
        >
          👎
        </button>
        {{ activity.rating }}
        <button
          class="bg-white shadow-md rounded-full m-3 px-2 py-2 md:px-3 md:py-2 md:m-3"
          @click="increment(activity.name)"
        >
          👍
        </button>
      </span>
      <!-- <span>{{ emojis[0] }}</span> -->
    </li>
  </div>
</template>

<script>
export default {
  name: "Activities",
  props: ["activity", "emojis", "increment", "decrement"],
};
</script>

<style></style>
