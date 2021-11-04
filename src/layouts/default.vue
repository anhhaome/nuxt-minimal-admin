<template>
  <m-default-layout
    :menuItems="[
      { label: 'Home', icon: 'fire', type: 'link', href: '/' },
      { label: 'Components', icon: 'cursor', type: 'link', href: '/parent' },
      { label: 'Devider 1', type: 'divider' },
      { label: 'Logout', icon: 'logout', type: 'link', href: '/login' }
    ]"
  >
    <template v-slot:topbar="params">
      <button class="m-button">
        <i class="icon icon-home"></i>
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