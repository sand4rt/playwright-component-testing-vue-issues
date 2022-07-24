<script lang="ts" setup>
const emit = defineEmits(['submit'])

const form = ref({ username: 'admin' });

function onSubmit() {
    emit('submit', form.value);
}
</script>
<template>
 <form @submit.prevent="onSubmit">
    <input type="text" v-model="form.username" name="username" />
    <button type="submit">Submit</button>
 </form>
</template>
