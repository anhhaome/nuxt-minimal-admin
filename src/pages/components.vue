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
      <m-login-form class="mt-4" :error="loginError" @submit="loginError = 'Wrong email or password'"></m-login-form>
    </m-panel>
    <!-- End Login Form -->

    <!-- Color Schema -->
    <m-panel title="Color Schema">
      <div class="border py-2 px-3 rounded my-3 primary">Primary <code>.primary</code></div>
      <div class="border py-2 px-3 rounded my-3 secondary">Secondary <code>.secondary</code></div>
      <div class="border py-2 px-3 rounded my-3 info">Info <code>.info</code></div>
      <div class="border py-2 px-3 rounded my-3 danger">Danger/Error <code>.danger/.error</code></div>
      <div class="border py-2 px-3 rounded my-3 warning">Warning <code>.warning</code></div>
      <div class="border py-2 px-3 rounded my-3 success">Success <code>.success</code></div>
    </m-panel>
    <!-- End Color Schema -->

    <!-- Alert Schema -->
    <m-panel title="Alert Schema">
      <div class="border py-2 px-3 rounded my-3 alert primary">Primary <code>.alert.primary</code></div>
      <div class="border py-2 px-3 rounded my-3 alert secondary">Secondary <code>.alert.secondary</code></div>
      <div class="border py-2 px-3 rounded my-3 alert info">Info <code>.alert.info</code></div>
      <div class="border py-2 px-3 rounded my-3 alert danger">Danger/Error <code>.alert.danger/.alert.error</code></div>
      <div class="border py-2 px-3 rounded my-3 alert warning">Warning <code>.alert.warning</code></div>
      <div class="border py-2 px-3 rounded my-3 alert success">Success <code>.alert.success</code></div>
    </m-panel>
    <!-- End Alert Schema -->

    <!-- Checkbox -->
    <m-panel title="Checkboxs">
      <h3>Simple</h3>
      <p>{{ !!abcChecked }}</p>
      <m-checkbox v-model="abcChecked">Simple checkbox <code class="text-sm">m-checkbox</code></m-checkbox>

      <h3 class="mt-4">Named</h3>
      <p>{{ abcChecked }}</p>
      <m-checkbox mvalue="hello" v-model="abcChecked">Named checkbox <code class="text-sm">m-checkbox[mvalue]</code></m-checkbox>

      <h3 class="mt-4">Group</h3>
      <p class="mb-2"><code class="text-sm">m-checkbox-group</code></p>
      <div class="mb-2">
        <span class="inline-block px-2 py-1 mr-2 info text-sm border rounded" v-for="name of checkboxSelected" :key="`cbs-${name}`">{{ name }}</span>
      </div>
      
      <m-checkbox-group name="demo" v-model="checkboxSelected">
        <m-checkbox name="demo" mvalue="bar" v-model="barChecked">Bar ({{ barChecked }})</m-checkbox>
        <m-checkbox name="demo" mvalue="foo" v-model="fooChecked">Foo ({{ fooChecked }})</m-checkbox>
      </m-checkbox-group>


      <h3 class="mt-4">Sync</h3>

      <div class="mb-2">
        <span class="inline-block px-2 py-1 mr-2 info text-sm border rounded" v-for="name of checkboxSelected" :key="`cbs-${name}`">{{ name }}</span>
      </div>

      <div class="grid grid-cols-2">
        <m-checkbox-group name="demo" v-model="checkboxSelected">
          <m-checkbox name="demo" mvalue="bar" v-model="barChecked">Bar ({{ barChecked }})</m-checkbox>
          <m-checkbox name="demo" mvalue="foo" v-model="fooChecked">Foo ({{ fooChecked }})</m-checkbox>
        </m-checkbox-group>

        <m-checkbox-group name="boo" v-model="checkboxSelected">
          <m-checkbox name="boo" mvalue="bar" v-model="barChecked">Bar ({{ barChecked }})</m-checkbox>
          <m-checkbox name="boo" mvalue="foo">Foo ({{ fooChecked }})</m-checkbox>
        </m-checkbox-group>
      </div>

      <h3 class="mt-4">Controller</h3>
      <p class="mb-2"><code class="text-sm">m-checkbox-control</code></p>
      <div class="mb-2">
        <span class="inline-block px-2 py-1 mr-2 info text-sm border rounded" v-for="name of checkboxSelected" :key="`cbs-${name}`">{{ name }}</span>
      </div>
      
      <m-checkbox-control name="demo" :items="['foo', 'bar']">Controls</m-checkbox-control>
      <m-checkbox-group name="demo" v-model="checkboxSelected">
        <m-checkbox name="demo" mvalue="bar" v-model="barChecked">Bar ({{ barChecked }})</m-checkbox>
        <m-checkbox name="demo" mvalue="foo" v-model="fooChecked">Foo ({{ fooChecked }})</m-checkbox>
      </m-checkbox-group>
    
    </m-panel>
    <!-- End Checkbox -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      loginError: null,

      checkboxSelected: ['bar'],
      fooChecked: 'foo',
      barChecked: null,
      abcChecked: true
    }
  }
}
</script>

<style>

</style>