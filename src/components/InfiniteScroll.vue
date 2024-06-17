<template>
    <div>
        <ul ref="listEl" class="data" id="data">
            <li v-for="user in usersList" :key="user.id">
                {{user.id}} {{ user.firstName }}
            </li>
            <p v-if="fetchingData && nextData > 0">
                Fetching ({{ nextData }}) more users... 
            </p>
            <p v-else>
                No more data
            </p>    
        </ul>
    </div>
  
</template>

<script setup>
import {ref} from "vue";
import getUsers from "../api/getUsers";
import getTotalUsers from "../api/getTotalUsers";
import {useInfiniteScroll} from "@vueuse/core";

const listEl = ref(null);

const usersToShow = 12;

const usersList = ref(await getUsers(usersToShow, 0));

const fetchingData = ref(null);

const totalData = await getTotalUsers();

const nextData = ref(totalData - usersToShow);

const getUsersOnScroll = async () => {


    fetchingData.value = true;
    await new Promise((res) => setTimeout(res, 2000));

    try {
        const newUsers = await getUsers(
        usersToShow,
        usersList.value.length
    );
    fetchingData.value = null;
    
    const currentData = usersList.value.length + usersToShow;
    console.log('currentData: ',currentData);

    const remainingData = totalData - currentData;

    nextData.value = remainingData;

    const lastData = totalData % usersToShow;
    console.log('lastData', lastData);

    console.log('remainingData: ',remainingData);

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

    .data {
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