<template>
  <b-form class="m-form" @submit="submitForm">
    <slot name="logo">
      <img src="../assets/images/logo.png" alt="Logo">
    </slot>

    <b-alert variant="danger" :show="!!error" class="m-alert">{{ error }}</b-alert>

    <b-form-group class="m-group">
      <b-input class="m-input" v-model="email" :active="!!email" @keyup.enter="submitForm"></b-input>
      <label for="" class="m-label">Email</label>
    </b-form-group>

    <b-form-group class="m-group">
      <b-input type="password" class="m-input" v-model="password" :active="!!password" @keyup.enter="submitForm"></b-input>
      <label for="" class="m-label">Password</label>
    </b-form-group>

    <b-button variant="primary" class="m-button" @click="submitForm">Login</b-button>
  </b-form>
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