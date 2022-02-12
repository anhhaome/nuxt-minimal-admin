<template>
  <div :class="`relative mt-2 ${size === 'sm' ? 'text-sm' : (size === 'lg' ? 'text-lg' : 'text-md')}`">
    <input 
      ref="input"
      :type="type || 'text'" 
      :class="`block border w-full ${size === 'sm' ? 'py-1 px-2' : 'py-2 px-3'} rounded peer
        focus:outline-0 focus:border-black`" 
      :id="generatedId"
      :value="formattedValue"
      @input="updateValue($event.target.value)"
      @keydown="onKeyDown"
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
  props: ['type', 'value', 'label', 'size'],

  data(){
    return {
      generatedId: nanoid(),
      localValue: this.value,
      isNegative: false
    }
  },

  computed: {
    originValue(){
      if (this.type !== 'currency')
        return this.localValue;

      const newValue = (this.localValue || '0').toString()
        .replace(/[^0-9]+/g, '');

      return (this.isNegative ? -1 : 1) * parseInt(newValue);
    },

    formattedValue(){
      if (this.type !== 'currency')
        return this.originValue;

      return this.$utils.formatCurrency(this.originValue);
    }
  },

  methods: {
    onKeyDown(e){
      if (this.type !== 'currency')
        return;

      e.preventDefault();

      if (e.key >= '0' && e.key <= '9'){
        this.localValue += e.key;
      } else if (e.key === 'Backspace' || e.key === 'Delete'){
        this.localValue = (this.localValue || '').toString().slice(0, -1);
      } else if (e.key === '-'){
        this.isNegative = !this.isNegative;
      } else {
        return;
      }

      this.$nextTick(() => {
        this.$emit('input', this.originValue || 0);
      });
    },

    updateValue(value){
      this.localValue = value;
      this.$nextTick(() => {
        this.$emit('input', this.originValue || 0);
      });
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