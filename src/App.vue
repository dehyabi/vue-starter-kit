<template>
  <div class="ml-5 mt-5">
    <input type="text" placeholder="First Name" v-model="firstName">
    <input type="text" placeholder="Last Name" v-model="lastName">
  </div>
  <PersonGreeting :firstName="firstName" :lastName="lastName" />
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

    return {
      firstName,
      lastName
    }
  }
}
</script>

<style>

</style>