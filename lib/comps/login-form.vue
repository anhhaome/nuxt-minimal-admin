<template>
  <div @submit="submitForm">
    <!-- Logo -->
    <div class="max-w-[6em] mx-auto mb-4">
      <slot name="logo">
        <img src="../assets/images/logo.png" alt="Logo">
      </slot>
    </div>
    <!-- End Logo -->

    <div class="alert danger border text-center text-sm font-bold rounded p-2 mb-4" v-if="error">{{ error }}</div>

    <m-input label="Email" type="email" class="mb-4"></m-input>
    <m-input label="Password" type="password" class="mb-4"></m-input>

    <m-button @click="submitForm" class="block w-full font-bold">LOGIN</m-button>
  </div>
</template>

<script>
export default {
  props: ['error'],

  layout: 'blank',

  data(){
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async submitForm(){
      this.$emit('submit', { 
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>