import { nanoid } from 'nanoid';

export default {
  props: ['name'],

  data(){
    return {
      generatedId: nanoid()
    }
  },

  created(){
    this.$set(this.$mgroups, this.groupName, []);
  },
  
  computed: {
    groupName(){
      return `m-checkbox-group-${this.name}`;
    },

    selected(){
      return this.$mgroups[this.groupName];
    }
  }
}