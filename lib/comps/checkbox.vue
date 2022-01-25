<template>
  <div>
    <input 
      type="checkbox" 
      :id="generatedId" 
      :checked="isChecked" 
      @input="updateValue($event.target.checked)"
    >
    <label :for="generatedId"><slot></slot></label>
  </div>
</template>

<script>
import CheckboxGroupMixin from '../mixins/checkbox-group';

export default {
  mixins: [CheckboxGroupMixin],

  props: ['value', 'mvalue'],

  computed: {
    isGrouped(){
      return this.name && this.mvalue;
    },

    isChecked(){
      if (!this.isGrouped)
        return !!this.value;

      return this.selected.indexOf(this.mvalue) !== -1;
    }
  },

  methods: {
    updateValue(checked){
      let newValue = checked ? (this.mvalue || true) : (this.mvalue ? null : false);
      let oldValue = !!this.value ? (this.mvalue || true) : (this.mvalue ? null : false);
        
      if (this.isGrouped){
        const pos = this.$mgroups[this.groupName].indexOf(this.mvalue);

        if (checked && pos === -1)
          this.$mgroups[this.groupName].push(newValue);

        if (!checked && pos !== -1)
          this.$mgroups[this.groupName].splice(pos, 1);
      }
      
      if (oldValue === newValue)
        return;

      this.$emit('input', newValue);
    }
  },

  mounted(){
    this.$nextTick(() => {
      this.updateValue(this.isChecked);
    });
  },

  watch: {
    value(){
      this.$nextTick(() => {
        this.updateValue(!!this.value);
      });
    },

    isChecked(){
      this.$nextTick(() => {
        this.updateValue(this.isChecked);
      });
    }
  }
}
</script>

<style>

</style>