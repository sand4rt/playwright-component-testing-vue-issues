<script lang="ts" setup>
const props = defineProps<{ test: string }>()
</script>

<template>
 <div>{{ props.test }}</div>
</template>
