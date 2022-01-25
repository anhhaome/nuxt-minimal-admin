<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import CheckboxGroupMixin from '../mixins/checkbox-group';

export default {
  mixins: [CheckboxGroupMixin],

  props: ['value'],

  methods: {
    updateSelected(){
      // add new items
      for (let item of this.value || []){
        let p = this.$mgroups[this.groupName].indexOf(item);

        if (p !== -1)
          continue;

        this.$mgroups[this.groupName].push(item);
      }

      // remove items
      let i = 0;
      while (i < this.$mgroups[this.groupName].length){
        let p = (this.value || []).indexOf(this.$mgroups[this.groupName][i]);
        if (p !== -1){
          i++;
          continue;
        }

        this.$mgroups[this.groupName].splice(i, 1);
      }
    }
  },

  mounted(){
    this.updateSelected();

    this.$watch('selected', () => {
      this.$emit('input', [...this.selected]);
    });

    this.$watch('value', () => {
      this.updateSelected();
    });
  },
}
</script>

<style>

</style>