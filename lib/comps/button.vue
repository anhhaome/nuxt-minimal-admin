<template>
  <button 
    @click="$emit('click', $event)"
    class="bg-black text-white rounded px-3 py-2 focus:outline-none"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style>

</style>