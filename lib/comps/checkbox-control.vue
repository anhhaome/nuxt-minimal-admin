<template>
  <div>
    <input 
      :id="generatedId"
      type="checkbox" 
      ref="control"
      @input="updateValue($event.target.checked)"
    >
    <label :for="generatedId"><slot></slot></label>
  </div>
</template>

<script>
import CheckboxGroupMixin from '../mixins/checkbox-group';

export default {
  mixins: [CheckboxGroupMixin],

  props: ['items'],

  computed: {
    control(){
      return this.$refs.control;
    }
  },

  methods: {
    updateValue(checked){
      while (this.selected.length)
        this.selected.splice(0, 1);

      if (checked){
        for (let item of this.items)
          this.selected.push(item);
      }
    },

    updateState(){
      let included = 0;
      for (let item of this.items || []){
        if (this.selected.indexOf(item) !== -1)
          included += 1;
      }

      this.control.indeterminate = false;

      if (included === 0){
        return this.control.checked = false;
      }

      if (included === (this.items || []).length)
        return this.control.checked = true;

      this.control.checked = false;
      this.control.indeterminate = true;

    }
  },

  mounted(){
    this.updateState();
  },

  watch: {
    selected(){
      this.updateState();
    }
  }
}
</script>

<style>

</style>