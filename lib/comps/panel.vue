<template>
  <div class="bg-white border rounded p-4 w-full">
    <h2 v-if="title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>

</style>