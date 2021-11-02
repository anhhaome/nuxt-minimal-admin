<template>
  <div class="m-form-wrapper">
    <m-login-form @submit="submit">
      <template v-slot:logo>
        <img src="../assets/images/logo.png" alt="Logo">
      </template>
    </m-login-form>
  </div>
</template>

<script>
export default {
  layout: 'blank',

  methods: {
    async submit(form){
      this.$loader.start();
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.$loader.end();
      this.$router.push('/');
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