<template>
  <main>
    <h1>Infinite Scrolling Component</h1>
    <Suspense>
      <InfiniteScroll />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </main>

</template>

<script setup>
import InfiniteScroll from './components/InfiniteScroll.vue'
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
}

p {
  text-align: center;
}
  
</style>