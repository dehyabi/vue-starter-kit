<template>
    <div>
        <ul ref="listEl">
            <li v-for="user in usersList" :key="user.id">
                {{ user.firstName }}
            </li>
            <p v-show="fetchingData">
                Fetching more users... 
            </p>
        </ul>
    </div>
  
</template>

<script setup>
import {ref} from "vue";
import getUsers from "../api/getUsers";
import {useInfiniteScroll} from "@vueuse/core";

const listEl = ref(null);

const usersToShow = 12;

const usersList = ref(await getUsers(usersToShow, 0));

const fetchingData = ref(null);

const getUsersOnScroll = async () => {
    fetchingData.value = true;
    await new Promise((res) => setTimeout(res, 2000));

    try {
        const newUsers = await getUsers(
        usersToShow,
        usersList.value.length
    );
    fetchingData.value = null;

    usersList.value.push(...newUsers);
    } catch (err) {
        console.log(err);
    }
}

useInfiniteScroll(
    listEl,
    async () => {
        await getUsersOnScroll();
    },
    {
        distance: 10
    }
);
</script>

<style scoped>
    div {
        justify-content: center;
        display: flex;
    }

    ul {
        background-color: rgb(136, 147, 219);
        list-style: none;
        max-height: 600px;
        width: 400px;
        overflow: scroll;
        padding: 12px 20px;

        box-shadow: 0 20px 25px -5px rgb(0 0 0 /0.1),
        0 8px 10px -6px rgb(0 0 0 /0.1);
    }

    li {
        padding: 20px;
    }
</style>