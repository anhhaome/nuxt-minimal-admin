<template>
  <div class="m-form-wrapper">
    <n-login-form @submit="submit"/>
  </div>
</template>

<script>
export default {
  layout: 'blank',

  methods: {
    submit(form){
      this.$noti('info', `You entered form with data: ${JSON.stringify(form)}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.m-form-wrapper {
  padding: 1em;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>