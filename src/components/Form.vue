<script lang="ts" setup>
const emit = defineEmits(['submit'])

function onSubmit() {
    emit('submit', { username: 'admin' });
}
</script>
<template>
 <form @submit="onSubmit">
    <button type="submit">Submit</button>
 </form>
</template>
