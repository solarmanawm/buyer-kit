<template>
    <p>Row 123</p>
</template>

<script lang="ts">
interface T {
    prop: string;
}

const t: T = {
    prop: 'string',
};

console.log(t);

export default {
    name: 'VRow',
};
</script>