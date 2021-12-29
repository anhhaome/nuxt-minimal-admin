<template>
  <m-default-layout
    :menuItems="[
      { label: 'Home', icon: 'planet', type: 'link', href: '/' },
      { label: 'components', icon: 'cube', type: 'link', href: '/parent' },
      { label: 'Devider 1', type: 'divider' },
      { label: 'Logout', icon: 'log-out', type: 'link', href: '/login' }
    ]"
  >
    <template v-slot:topbar="params">
      <button class="m-button">
        <ion-icon name="home-outline"></ion-icon>
      </button>

      <div class="m-page-title">{{ params.pageTitle }}</div>

      <input type="text" class="m-input fill">
    </template>

    <template v-slot:sidebar>
      <div class="text-center">This is a custom widget.</div>
    </template>

    <Nuxt />
  </m-default-layout>
</template>

<script>
export default {
}
</script>

<style>

</style>