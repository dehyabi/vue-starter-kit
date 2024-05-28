<template>
  <div>
    <h2>{{ heading }}</h2>
    <br />

    <div v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
  </div>
  <hr />
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },
  beforeMount: function () {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.posts = response.data;
    });
    console.log(this.posts);
  },
  name: "AsyncAwaitAll",
  props: {
    heading: String,
  },
};
</script>

<style scoped>
h2 {
  color: rgb(85, 0, 241);
}
</style>
