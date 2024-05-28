<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <suspense>
    <template #default>
      <async-component>
        <AsyncAwait heading="Implementation of Using Async Await in Vue 3" />
      </async-component>
    </template>

    <template #fallback>
      <p>Loading...</p>
    </template>
  </suspense>
  <LoopingData heading="Implementation of Looping Data in Vue 3" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AsyncAwait from "./components/AsyncAwait.vue";
import LoopingData from "./components/LoopingData.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AsyncAwait,
    LoopingData,
  },
};
</script>

<style></style>
