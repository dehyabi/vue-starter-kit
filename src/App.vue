<template>
  <div class="ml-5 mt-5 flex justify-center">
    <input class="input" type="text" placeholder="First Name" v-model="firstName">
    <input class="input" type="text" placeholder="Last Name" v-model="lastName">
  </div>
  <PersonGreeting :firstName="firstName" :lastName="lastName" @callHeroes="callHeroes" />
</template>

<script>
import {ref} from "vue";
import PersonGreeting from './components/PersonGreeting.vue'
export default {
  components: {
    PersonGreeting
  },
  setup() {
    const firstName = ref('')
    const lastName = ref('')

    function callHeroes(hero) {
      alert(`Calling ${hero}`)
    }

    return {
      firstName,
      lastName,
      callHeroes
    }
  }
}
</script>

<style scoped>

.input {
  @apply border border-gray-400 mr-2 pl-2 rounded-md py-2;
}

</style>