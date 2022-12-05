<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore
      optio modi molestias nobis aliquid laborum reprehenderit numquam ducimus
      quasi.
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style scoped></style>
