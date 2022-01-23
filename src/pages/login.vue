<template>
  <div class="flex min-h-screen items-center justify-center">
    <m-login-form 
      @submit="submit" 
      class="bg-white p-4 border rounded w-80"
    >
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