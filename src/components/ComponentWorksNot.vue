<script lang="ts" setup>
import { RouteName } from '../router';

const props = defineProps<{ test: string }>();
</script>

<template>
 <RouterLink :to="{ name: RouteName.TEST }">{{ props.test }}</RouterLink>
</template>
