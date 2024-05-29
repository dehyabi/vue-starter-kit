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
import LoopingData from "./components/LoopingData.vue";
import LoadingMessage from "./components/LoadingMessage.vue";

import { defineAsyncComponent } from "vue";

const AsyncComponent = defineAsyncComponent({
  loader: () => import("./components/AsyncAwait.vue"),
  loadingComponent: LoadingMessage,
  suspensible: false,
});

export default {
  name: "App",
  components: {
    HelloWorld,
    AsyncComponent,
    LoopingData,
  },
};
</script>

<style></style>
