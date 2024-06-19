<template>
  <div>
    <ul class="data" id="data">
      <li v-for="user in usersList" :key="user.id">
        {{ user.id }} {{ user.firstName }}
      </li>
      <div class="flex justify-center" v-if="nextData > 0">
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          @click="loadMore"
        >
          View ({{ nextData }}) More Users
        </button>
      </div>
      <p v-else class="opacity-50 flex justify-center">No more data</p>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import getUsers from "../api/getUsers";
import getTotalUsers from "../api/getTotalUsers";
import { useInfiniteScroll } from "@vueuse/core";

const usersToShow = 12;

const usersList = ref(await getUsers(usersToShow, 0));
console.log("usersList: ", usersList);

const totalData = await getTotalUsers();

const nextData = ref(totalData - usersToShow);

const loadMore = () => {
  useInfiniteScroll(window, async () => {
    const getUsersOnScroll = async () => {
      await new Promise((res) => setTimeout(res, 1000));

      try {
        const newUsers = await getUsers(usersToShow, usersList.value.length);

        console.log("newUsers: ", newUsers);

        const currentData = usersList.value.length + usersToShow;
        console.log("currentData: ", currentData);

        const remainingData = totalData - currentData;

        nextData.value = remainingData;

        const lastData = totalData % usersToShow;
        console.log("lastData", lastData);

        console.log("remainingData: ", remainingData);

        usersList.value.push(...newUsers);
      } catch (err) {
        console.log(err);
      }
    };

    await getUsersOnScroll();
  });
};
</script>

<style scoped>
div {
  justify-content: center;
  display: flex;
}

.data {
  background-color: rgb(136, 147, 219);
  list-style: none;

  overflow: scroll;
  padding: 12px 20px;

  box-shadow: 0 20px 25px -5px rgb(0 0 0 /0.1), 0 8px 10px -6px rgb(0 0 0 /0.1);
}

li {
  padding: 20px;
}
</style>
