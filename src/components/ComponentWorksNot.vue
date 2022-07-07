<script lang="ts" setup>
const props = defineProps<{ test: string }>()
</script>

<template>
 <RouterLink :to="{ name: 'test' }">{{ props.test }}</RouterLink>
</template>
