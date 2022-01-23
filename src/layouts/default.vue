<template>
  <m-default-layout
    :menuItems="[
      { label: 'Home', icon: 'planet', type: 'link', href: '/' },
      { label: 'Components', icon: 'cube', type: 'link', href: '/components' },
      { label: 'Functions', icon: 'footsteps', type: 'link', href: '/functions' },
      { label: 'Devider 1', type: 'divider' },
      { label: 'Logout', icon: 'log-out', type: 'link', href: '/login' }
    ]"
  >
    <template v-slot:topbar="params">
      <div class="p-2.5 font-bold">{{ params.pageTitle }}</div>
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