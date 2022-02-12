<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 p-4">
    <!-- Color Schema -->
    <m-panel title="Color Schema">

      <m-codeblock
        class="mb-4"
      >
        <div class="border py-2 px-3 rounded my-3 primary">Primary</div>
        <div class="border py-2 px-3 rounded my-3 secondary">Secondary</div>
        <div class="border py-2 px-3 rounded my-3 info">Info</div>
        <div class="border py-2 px-3 rounded my-3 danger">Danger/Error</div>
        <div class="border py-2 px-3 rounded my-3 warning">Warning</div>
        <div class="border py-2 px-3 rounded my-3 success">Success</div>

        <template #help>
          <m-highlight class="text-xs" language="html">
            <pre>&lt;div class=&quot;border py-2 px-3 rounded my-3 primary&quot;&gt;Primary&lt;/div&gt; 
&lt;div class=&quot;border py-2 px-3 rounded my-3 secondary&quot;&gt;Secondary&lt;/div&gt; 
&lt;div class=&quot;border py-2 px-3 rounded my-3 info&quot;&gt;Info&lt;/div&gt; 
&lt;div class=&quot;border py-2 px-3 rounded my-3 danger&quot;&gt;Danger/Error&lt;/div&gt; 
&lt;div class=&quot;border py-2 px-3 rounded my-3 warning&quot;&gt;Warning&lt;/div&gt; 
&lt;div class=&quot;border py-2 px-3 rounded my-3 success&quot;&gt;Success&lt;/div&gt;</pre>
          </m-highlight>
        </template>
      </m-codeblock>
    </m-panel>
    <!-- End Color Schema -->

    <!-- Alert Schema -->
    <m-panel title="Alert Schema">
      <m-codeblock
        class="mb-4"
      >
        <div class="border py-2 px-3 rounded my-3 alert primary">Primary <code>.alert.primary</code></div>
        <div class="border py-2 px-3 rounded my-3 alert secondary">Secondary <code>.alert.secondary</code></div>
        <div class="border py-2 px-3 rounded my-3 alert info">Info <code>.alert.info</code></div>
        <div class="border py-2 px-3 rounded my-3 alert danger">Danger/Error <code>.alert.danger/.alert.error</code></div>
        <div class="border py-2 px-3 rounded my-3 alert warning">Warning <code>.alert.warning</code></div>
        <div class="border py-2 px-3 rounded my-3 alert success">Success <code>.alert.success</code></div>

        <template #help>
          <m-highlight class="text-xs" language="html">
            <pre>&lt;div class=&quot;border py-2 px-3 rounded my-3 alert primary&quot;&gt;Primary &lt;code&gt;.alert.primary&lt;/code&gt;&lt;/div&gt; 
&lt;div class=&quot;border py-2 px-3 rounded my-3 alert secondary&quot;&gt;Secondary &lt;code&gt;.alert.secondary&lt;/code&gt;&lt;/div&gt; 
&lt;div class=&quot;border py-2 px-3 rounded my-3 alert info&quot;&gt;Info &lt;code&gt;.alert.info&lt;/code&gt;&lt;/div&gt; 
&lt;div class=&quot;border py-2 px-3 rounded my-3 alert danger&quot;&gt;Danger/Error &lt;code&gt;.alert.danger/.alert.error&lt;/code&gt;&lt;/div&gt; 
&lt;div class=&quot;border py-2 px-3 rounded my-3 alert warning&quot;&gt;Warning &lt;code&gt;.alert.warning&lt;/code&gt;&lt;/div&gt; 
&lt;div class=&quot;border py-2 px-3 rounded my-3 alert success&quot;&gt;Success &lt;code&gt;.alert.success&lt;/code&gt;&lt;/div&gt;</pre>
          </m-highlight>
        </template>
      </m-codeblock>
    </m-panel>
    <!-- End Alert Schema -->

    <!-- Form -->
    <m-panel title="MInput">
      <h3 class="mt-4">Simple</h3>

      <m-codeblock
        class="mb-4"
      >
        <m-input label="Your text"/>
        <m-input label="Your number" type="number"/>
        <m-input label="Your password" type="password"/>
        <m-input label="Your currency" type="currency"/>

        <template #help>
          <m-highlight class="text-xs" language="html">
            <pre>&lt;m-input label=&quot;Enter something...&quot;/&gt;</pre>
          </m-highlight>
        </template>
      </m-codeblock>

      <h3 class="mt-4">Sized</h3>

      <m-input size="sm" value="This is a small"/>
      <m-input size="md" value="This is a medium"/>
      <m-input size="lg" value="This is a large"/>
    </m-panel>

    <m-panel title="MButton">
      <m-codeblock>
        <m-button class="mb-2" size="lg" type="secondary">Click me</m-button>
        <m-button class="mb-2" size="lg" type="info">Click me</m-button>
        <m-button class="mb-2" size="lg" type="danger">Click me</m-button>
        <m-button class="mb-2" size="lg" type="warning">Click me</m-button>
        <m-button class="mb-2" size="lg" type="success">Click me</m-button>

        <br>

        <m-button class="mb-2" size="lg" type="outline-primary">Click me</m-button>
        <m-button class="mb-2" size="lg" type="outline-secondary">Click me</m-button>
        <m-button class="mb-2" size="lg" type="outline-info">Click me</m-button>
        <m-button class="mb-2" size="lg" type="outline-danger">Click me</m-button>
        <m-button class="mb-2" size="lg" type="outline-warning">Click me</m-button>
        <m-button class="mb-2" size="lg" type="outline-success">Click me</m-button>

        <br>

        <m-button>Click me</m-button>
        <m-button class="mb-2" type="secondary">Click me</m-button>
        <m-button class="mb-2" type="info">Click me</m-button>
        <m-button class="mb-2" type="danger">Click me</m-button>
        <m-button class="mb-2" type="warning">Click me</m-button>
        <m-button class="mb-2" type="success">Click me</m-button>
        
        <br>

        <m-button class="mb-2" type="outline-primary">Click me</m-button>
        <m-button class="mb-2" type="outline-secondary">Click me</m-button>
        <m-button class="mb-2" type="outline-info">Click me</m-button>
        <m-button class="mb-2" type="outline-danger">Click me</m-button>
        <m-button class="mb-2" type="outline-warning">Click me</m-button>
        <m-button class="mb-2" type="outline-success">Click me</m-button>

        <br>

        <m-button class="mb-2" size="sm" type="secondary">Click me</m-button>
        <m-button class="mb-2" size="sm" type="info">Click me</m-button>
        <m-button class="mb-2" size="sm" type="danger">Click me</m-button>
        <m-button class="mb-2" size="sm" type="warning">Click me</m-button>
        <m-button class="mb-2" size="sm" type="success">Click me</m-button>

        <br>

        <m-button class="mb-2" size="sm" type="outline-primary">Click me</m-button>
        <m-button class="mb-2" size="sm" type="outline-secondary">Click me</m-button>
        <m-button class="mb-2" size="sm" type="outline-info">Click me</m-button>
        <m-button class="mb-2" size="sm" type="outline-danger">Click me</m-button>
        <m-button class="mb-2" size="sm" type="outline-warning">Click me</m-button>
        <m-button class="mb-2" size="sm" type="outline-success">Click me</m-button>

        <template #help>
          <m-highlight class="text-xs" language="html">
            <pre>&lt;m-button class=&quot;mb-2&quot; size=&quot;lg&quot; type=&quot;secondary&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;lg&quot; type=&quot;info&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;lg&quot; type=&quot;danger&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;lg&quot; type=&quot;warning&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;lg&quot; type=&quot;success&quot;&gt;Click me&lt;/m-button&gt; 
&lt;br&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;lg&quot; type=&quot;outline-primary&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;lg&quot; type=&quot;outline-secondary&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;lg&quot; type=&quot;outline-info&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;lg&quot; type=&quot;outline-danger&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;lg&quot; type=&quot;outline-warning&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;lg&quot; type=&quot;outline-success&quot;&gt;Click me&lt;/m-button&gt; 
&lt;br&gt;
&lt;m-button&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; type=&quot;secondary&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; type=&quot;info&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; type=&quot;danger&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; type=&quot;warning&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; type=&quot;success&quot;&gt;Click me&lt;/m-button&gt; 
&lt;br&gt; 
&lt;m-button class=&quot;mb-2&quot; type=&quot;outline-primary&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; type=&quot;outline-secondary&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; type=&quot;outline-info&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; type=&quot;outline-danger&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; type=&quot;outline-warning&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; type=&quot;outline-success&quot;&gt;Click me&lt;/m-button&gt; 
&lt;br&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;sm&quot; type=&quot;secondary&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;sm&quot; type=&quot;info&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;sm&quot; type=&quot;danger&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;sm&quot; type=&quot;warning&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;sm&quot; type=&quot;success&quot;&gt;Click me&lt;/m-button&gt; 
&lt;br&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;sm&quot; type=&quot;outline-primary&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;sm&quot; type=&quot;outline-secondary&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;sm&quot; type=&quot;outline-info&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;sm&quot; type=&quot;outline-danger&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;sm&quot; type=&quot;outline-warning&quot;&gt;Click me&lt;/m-button&gt; 
&lt;m-button class=&quot;mb-2&quot; size=&quot;sm&quot; type=&quot;outline-success&quot;&gt;Click me&lt;/m-button&gt;</pre>
          </m-highlight>
        </template>
      </m-codeblock>

    </m-panel>
    <!-- End Form -->

    <!-- Checkbox -->
    <m-panel title="Checkboxs">
      <h3 class="mt-4">Simple</h3>

      <m-codeblock
        class="mb-4"
      >
        <p>{{ !!abcChecked }}</p>
        <m-checkbox v-model="abcChecked">Simple checkbox</m-checkbox>

        <template #help>
          <m-highlight class="text-xs" language="html">
            <pre>&lt;m-checkbox 
  v-model=&quot;abcChecked&quot;
&gt;
  Simple checkbox
&lt;/m-checkbox&gt;</pre>
          </m-highlight>
        </template>
      </m-codeblock>

      <h3 class="mt-4">Named</h3>

      <m-codeblock
        class="mb-4"
      >
        <p>{{ abcChecked }}</p>
        <m-checkbox 
          mvalue="hello"
          v-model="abcChecked"
        >
          Named checkbox
        </m-checkbox>

        <template #help>
          <m-highlight class="text-xs" language="html">
            <pre>&lt;m-checkbox 
  mvalue=&quot;hello&quot;
  v-model=&quot;abcChecked&quot; 
&gt; 
  Named checkbox 
&lt;/m-checkbox&gt;</pre>
          </m-highlight>
        </template>
      </m-codeblock>

      <h3 class="mt-4">Group</h3>

      <m-codeblock
        class="mb-4"
      >
        <p class="mb-2"><code class="text-sm">m-checkbox-group</code></p>
        <div class="mb-2">
          <span class="inline-block px-2 py-1 mr-2 info text-sm border rounded" v-for="name of checkboxSelected" :key="`cbs-${name}`">{{ name }}</span>
        </div>

        <m-checkbox-group name="demo" v-model="checkboxSelected">
          <m-checkbox name="demo" mvalue="bar" v-model="barChecked">Bar ({{ barChecked }})</m-checkbox>
          <m-checkbox name="demo" mvalue="foo" v-model="fooChecked">Foo ({{ fooChecked }})</m-checkbox>
        </m-checkbox-group>

        <template #help>
          <m-highlight class="text-xs" language="html">
            <pre>&lt;m-checkbox-group name=&quot;demo&quot; v-model=&quot;checkboxSelected&quot;&gt; 
  &lt;m-checkbox name=&quot;demo&quot; mvalue=&quot;bar&quot; v-model=&quot;barChecked&quot;&gt;Bar&lt;/m-checkbox&gt; 
  &lt;m-checkbox name=&quot;demo&quot; mvalue=&quot;foo&quot; v-model=&quot;fooChecked&quot;&gt;Foo&lt;/m-checkbox&gt; 
&lt;/m-checkbox-group&gt;
</pre>
          </m-highlight>
        </template>
      </m-codeblock>

      <h3 class="mt-4">Sync</h3>

      <m-codeblock
        class="mb-4"
      >
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

        <template #help>
          <m-highlight class="text-xs" language="html">
            <pre>&lt;div class=&quot;grid grid-cols-2&quot;&gt; 
  &lt;m-checkbox-group name=&quot;demo&quot; v-model=&quot;checkboxSelected&quot;&gt; 
    &lt;m-checkbox name=&quot;demo&quot; mvalue=&quot;bar&quot; v-model=&quot;barChecked&quot;&gt;Bar ({{ barChecked }})&lt;/m-checkbox&gt; 
    &lt;m-checkbox name=&quot;demo&quot; mvalue=&quot;foo&quot; v-model=&quot;fooChecked&quot;&gt;Foo ({{ fooChecked }})&lt;/m-checkbox&gt; 
  &lt;/m-checkbox-group&gt; 
  &lt;m-checkbox-group name=&quot;boo&quot; v-model=&quot;checkboxSelected&quot;&gt; 
    &lt;m-checkbox name=&quot;boo&quot; mvalue=&quot;bar&quot; v-model=&quot;barChecked&quot;&gt;Bar ({{ barChecked }})&lt;/m-checkbox&gt; 
    &lt;m-checkbox name=&quot;boo&quot; mvalue=&quot;foo&quot;&gt;Foo ({{ fooChecked }})&lt;/m-checkbox&gt; 
  &lt;/m-checkbox-group&gt; 
&lt;/div&gt;</pre>
          </m-highlight>
        </template>
      </m-codeblock>

      <h3 class="mt-4">Controller</h3>

      <m-codeblock
        class="mb-4"
      >
        <p class="mb-2"><code class="text-sm">m-checkbox-control</code></p>
        <div class="mb-2">
          <span class="inline-block px-2 py-1 mr-2 info text-sm border rounded" v-for="name of checkboxSelected" :key="`cbs-${name}`">{{ name }}</span>
        </div>
        
        <m-checkbox-control name="demo" :items="['foo', 'bar']">Controls</m-checkbox-control>
        <m-checkbox-group name="demo" v-model="checkboxSelected">
          <m-checkbox name="demo" mvalue="bar" v-model="barChecked">Bar ({{ barChecked }})</m-checkbox>
          <m-checkbox name="demo" mvalue="foo" v-model="fooChecked">Foo ({{ fooChecked }})</m-checkbox>
        </m-checkbox-group>

        <template #help>
          <m-highlight class="text-xs" language="html">
            <pre>&lt;m-checkbox-control name=&quot;demo&quot; :items=&quot;['foo', 'bar']&quot;&gt;Controls&lt;/m-checkbox-control&gt; 
&lt;m-checkbox-group name=&quot;demo&quot; v-model=&quot;checkboxSelected&quot;&gt; 
  &lt;m-checkbox name=&quot;demo&quot; mvalue=&quot;bar&quot; v-model=&quot;barChecked&quot;&gt;Bar ({{ barChecked }})&lt;/m-checkbox&gt; 
  &lt;m-checkbox name=&quot;demo&quot; mvalue=&quot;foo&quot; v-model=&quot;fooChecked&quot;&gt;Foo ({{ fooChecked }})&lt;/m-checkbox&gt; 
&lt;/m-checkbox-group&gt;
</pre>
          </m-highlight>
        </template>
      </m-codeblock>
    
    </m-panel>
    <!-- End Checkbox -->

    <!-- Dropdown -->
    <m-panel title="Dropdown">
      <h3 class="mt-4">Simple</h3>

      Click to open
      <m-dropdown>
        <div class="p-2">
          This is a dropdown.
        </div>
      </m-dropdown>

      <h3 class="mt-4">Sized</h3>
      
      <m-dropdown size="sm">
        <div class="p-2">
          This is a small dropdown.
        </div>
      </m-dropdown>

      <m-dropdown size="md">
        <div class="p-2">
          This is a medium dropdown.
        </div>
      </m-dropdown>

      <m-dropdown size="lg">
        <div class="p-2">
          This is a large dropdown.
        </div>
      </m-dropdown>

      <h3 class="mt-4">Position</h3>

      <div class="flex justify-between">
        <m-dropdown position="left">
          <div class="p-2">
            This is a left dropdown.
          </div>
        </m-dropdown>

        <m-dropdown position="right">
          <div class="p-2">
            This is a right dropdown.
          </div>
        </m-dropdown>
      </div>
    </m-panel>
    <!-- End Dropdown -->

    <!-- Login Form -->
    <m-panel title="MLoginForm">
      <m-codeblock
        class="mb-4"
      >
        <m-login-form
          :error="loginError" 
          @submit="loginError = 'Wrong email or password'"
        ></m-login-form>

        <template #help>
          <m-highlight class="text-xs" language="html">
            <pre>&lt;m-login-form
  :error=&quot;loginError&quot;
  @submit=&quot;loginError = 'Wrong email or password'&quot; &gt;
&lt;/m-login-form&gt;</pre>
          </m-highlight>
        </template>
      </m-codeblock>
    </m-panel>
    <!-- End Login Form -->
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