<template>
  <n-default-layout
    :menuItems="[
      { label: 'Home', icon: 'fire', type: 'link', href: '/' },
      { label: 'Components', icon: 'cursor', type: 'link', href: '/comps' },
      { label: 'Devider 1', type: 'divider' },
      { label: 'Logout', icon: 'logout', type: 'link', href: '/login' }
    ]"
  >
    <Nuxt />
  </n-default-layout>
</template>

<script>
export default {
}
</script>

<style>

</style>