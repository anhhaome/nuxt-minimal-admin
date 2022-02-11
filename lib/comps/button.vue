<template>
  <button 
    @click="$emit('click', $event)"
    :class="`${type || 'primary'} leading-4 rounded p-3 focus:outline-none`"
    v-if="size=='lg'"
  >
    <slot></slot>
  </button>

  <button 
    @click="$emit('click', $event)"
    :class="`${type || 'primary'} leading-4 rounded p-1 focus:outline-none text-sm`"
    v-else-if="size=='sm'"
  >
    <slot></slot>
  </button>

  <button 
    @click="$emit('click', $event)"
    :class="`${type || 'primary'} leading-4 rounded p-2 focus:outline-none text-sm`"
    v-else
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'size']
}
</script>

<style>

</style>