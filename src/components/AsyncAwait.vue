<template>
  <div>
    <h2>{{ heading }}</h2>
    <br />
    <h3>({{ post.id }}) {{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
  <hr />
</template>

<script>
import { ref } from "vue";

export default {
  async setup() {
    const post = ref({
      id: -1,
      title: "",
      body: "",
    });

    await fetch("https://jsonplaceholder.typicode.com/posts/12")
      .then((response) => response.json())
      .then((data) => {
        post.value.id = data.id;
        post.value.title = data.title;
        post.value.body = data.body;
      });


    return { post };
  },
  name: "AsyncAwait",
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
