<template>
  <div class="grid grid-cols-1 gap-4 mb-4 p-4">
    <m-panel>
      <h2 class="mb-2">$loader</h2>
      <m-button @click="$loader.start()">.start()</m-button>
      <m-button @click="$loader.end()">.end()</m-button>
    </m-panel>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>