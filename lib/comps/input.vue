<template>
  <div class="relative">
    <input 
      :type="type || 'text'" 
      class="block border w-full py-2 px-3 rounded peer
        focus:outline-0 focus:border-black" 
      :id="generatedId"
      @input="updateValue($event.target.value)"
    >
    <label 
      :for="generatedId" 
      :active="!!localValue"
      class="absolute top-2 left-2 pl-1 bg-white cursor-text transition-all
        peer-focus:top-[-.7em] peer-focus:text-xs
        m-active:top-[-.7em] m-active:text-xs"
    >{{ label }}</label>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
  props: ['type', 'value', 'label'],

  data(){
    return {
      generatedId: nanoid(),
      localValue: this.value
    }
  },

  methods: {
    updateValue(value){
      this.localValue = value;
      this.$emit('input', this.localValue);
    }
  },

  watch: {
    value(){
      if (this.localValue === this.value)
        return;

      this.localValue = this.value;
    }
  }
}
</script>

<style>

</style>