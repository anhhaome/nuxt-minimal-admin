<template>
  <button 
    @click="$emit('click', $event)"
    :class="`${type || 'primary'} rounded px-3 py-2 focus:outline-none`"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style>

</style>