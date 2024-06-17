<template>
  <div class="ml-5">Hello {{ fullName }}</div>
</template>

<script>
import { computed } from 'vue'
export default {
    name: "PersonGreeting",
    setup(props) {
        const fullName = computed(()=> {
            return `${props.firstName} ${props.lastName}`
        })

        return {
            fullName
        }
    },
    props: ['firstName', 'lastName']
}
</script>

<style>

</style>