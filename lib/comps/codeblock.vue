<template>
  <div class="flex">

    <div class="flex-1" ref="source" v-if="preview">
      <slot/>
    </div>

    <div
      class="flex-1 overflow-x-auto"
      v-else
    >
      <slot name="help"/>
    </div>

    <div class="pl-2">
      <m-button
        class="w-6 h-6"
        size="sm"
        :type="preview ? 'outline-primary' : 'primary'"
        @click="togglePreview"
      >
        <ion-icon name="code-slash-outline"
          v-if="preview"
        ></ion-icon>
        <ion-icon name="eye-outline"
          v-else
        ></ion-icon>
      </m-button>
    </div>

  </div>
</template>

<script>
export default {
  props: ['help'],

  data(){
    return {
      preview: true,
    }
  },

  methods: {
    togglePreview(){
      this.preview = !this.preview;
    }
  }
}
</script>

<style>

</style>