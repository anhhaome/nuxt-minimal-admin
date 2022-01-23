<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 p-4">
    <!-- Form -->
    <m-panel>
      <h2 class="mb-2">MInput</h2>
      <m-input label="Enter something..." class="mb-4"></m-input>

      <h2 class="mb-2">MButton</h2>
      <m-button>Click me</m-button>

    </m-panel>
    <!-- End Form -->

    <!-- Login Form -->
    <m-panel title="MLoginForm">
      <m-login-form class="mt-4"></m-login-form>
    </m-panel>
    <!-- End Login Form -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>