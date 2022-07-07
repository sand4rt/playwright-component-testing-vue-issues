<script lang="ts" setup>
const props = defineProps<{ test: string }>()
</script>

<template>
 <a href="/">{{ props.test }}</a>
</template>
