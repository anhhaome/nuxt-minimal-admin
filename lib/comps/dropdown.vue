<template>
  <div class="inline-block relative">
    <m-button
      :size="size"
      @click="toggleVisible"
      ref="button"
    >
      <ion-icon name="caret-down-outline"></ion-icon>
    </m-button>

    <div 
      class="absolute shadow border rounded bg-white z-10" 
      :style="positionStyle"
      v-if="visible"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['size', 'position'],

  data(){
    return {
      visible: false,
      groupName: 'm-dropdown-visible',
      positionStyle: null
    }
  },

  computed: {
    isGlobalVisible(){
      if (!this.$mgroups[this.groupName])
        this.$set(this.$mgroups, this.groupName, false);

      return this.$mgroups[this.groupName];
    },
  },

  methods: {
    toggleVisible(){
      const nextState = !this.visible;

      this.$set(this.$mgroups, this.groupName, false);

      this.$nextTick(() => {
        if (!nextState){
          this.visible = false;
          return;
        }

        this.$set(this.$mgroups, this.groupName, true);
        this.visible = true;
      }); 
    },

    updatePosition(){
      const { top } = this.$refs.button.$el.getBoundingClientRect();
      const elHeight = this.$refs.button.$el.offsetHeight;

      this.positionStyle = {
        ...(top < window.innerHeight/2 ? { top: `${elHeight}px` } : { bottom: `${elHeight}px` }) ,
        ...(this.position === 'right' ? { right: '0px' } : { left: '0px' })
      }
    }
  },

  mounted(){
    this.updatePosition();

    this.$watch('isGlobalVisible', () => {
      if (this.isGlobalVisible)
        return;

      this.visible = false;
    });
  },

  watch: {
    visible(){
      if (!this.visible)
        return;

      this.updatePosition();
    },

    position(){
      this.updatePosition();
    }
  }
}
</script>

<style>

</style>