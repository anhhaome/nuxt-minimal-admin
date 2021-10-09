<template>
  <div>
    <b-form class="m-form">
      <b-form-group label="Email">
        <b-input></b-input>
      </b-form-group>

      <b-form-group label="Password">
        <b-input type="password"></b-input>
      </b-form-group>

      <b-form-group>
        <b-button variant="primary">Login</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  layout: 'blank'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';

.m-form {
  background-color: $secondary-bg;
  padding: 1em;
  max-width: 300px;
  margin: 5em auto 0 auto;
  border-radius: .5em;
  border: 1px solid $border;
}
</style>