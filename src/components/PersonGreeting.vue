<template>
<div>
    <div class="flex justify-center my-3">Hello <span class="text-green-500 font-bold ml-1">{{ fullName }}</span></div>
    <div class="flex justify-center">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" @click="sendEvent">Call Heroes</button>
    </div>
</div>
</template>

<script>
import { computed } from 'vue'
export default {
    name: "PersonGreeting",
    setup(props, context) {
        console.log(context)
        const fullName = computed(()=> {
            return `${props.firstName} ${props.lastName}`
        })

        function sendEvent() {
            context.emit('callHeroes', fullName.value)
        }

        return {
            fullName,
            sendEvent
        }
    },
    props: ['firstName', 'lastName'],
    emits: ['callHeroes']
}
</script>

<style scoped>
</style>