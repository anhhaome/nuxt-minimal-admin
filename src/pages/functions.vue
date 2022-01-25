<template>
  <div class="grid grid-cols-1 gap-4 mb-4 p-4">
    <m-panel>
      <h2 class="mb-2">$loader</h2>
      <m-button @click="$loader.start()">.start()</m-button>
      <m-button @click="$loader.end()">.end()</m-button>

      <h2 class="mt-5 mb-2">$notice</h2>
      <m-button @click="$noti('info', 'Hello, world')">('info', 'Hello, world')</m-button>
      <m-button @click="$noti('danger', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper non tortor ut tristique. Vivamus ac porttitor nulla. Pellentesque convallis ligula felis, et commodo mi bibendum eget. Nunc congue aliquet est, ut vulputate turpis rhoncus ut. Fusce quis lacus at velit vestibulum gravida. Phasellus vel semper odio, ac aliquam justo. ')">('info', 'Lorem ipsum...')</m-button>
    </m-panel>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>