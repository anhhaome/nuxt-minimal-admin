<template>
  <div class="m-form-wrapper">
    <b-form class="m-form" @submit="submitForm">
      <img src="@/assets/images/logo.png" alt="Logo" class="m-logo">

      <b-alert variant="danger" :show="!!error" class="m-alert">{{ error }}</b-alert>

      <b-form-group class="m-group">
        <b-input class="m-input" v-model="email" :active="!!email"></b-input>
        <label for="" class="m-label">Email</label>
      </b-form-group>

      <b-form-group class="m-group">
        <b-input type="password" class="m-input" v-model="password" :active="!!password"></b-input>
        <label for="" class="m-label">Password</label>
      </b-form-group>

      <b-button variant="primary" class="m-button" @click="submitForm">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  layout: 'blank',

  data(){
    return {
      email: '',
      password: '',
      error: ''
    }
  },

  methods: {
    async submitForm(){
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/constants.scss';

.m-form-wrapper {
  padding: 1em;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .m-form {
    background-color: var(--secondary-bg);
    padding: 1em;
    max-width: 360px;
    width: 100%;
    border-radius: $radius;
    border: 1px solid var(--border);

    .m-logo {
      width: auto;
      max-width: 100%;
      max-height: 80px;
      margin: 0 auto 1.5em auto;
      display: block;
    }

    .m-alert {
      font-size: .8em;
      padding: 1em;
      font-weight: bold;
      margin-bottom: 2em;
      text-align: center;
    }

    .m-group {
      position: relative;
      margin-bottom: 1em;

      .m-input {
        line-height: 2em;
        height: 3em;
      }

      .m-label {
        position: absolute;
        top: .7em;
        left: .5em;
        pointer-events: none;
        background-color: white;
        padding: 0 .5em;
        transition: all .1s;
      }

      .m-input:focus {
        box-shadow: none;
      }

      .m-input:focus~.m-label,
      .m-input[active]~.m-label {
        font-size: .8em;
        top: -.6em;
      }
    }

    .m-button {
      width: 100%;
      line-height: 2em;
      height: 3em;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
}
</style>