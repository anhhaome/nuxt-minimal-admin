import path from 'path';

export default function nuxtMinimalAdmin(){
  this.nuxt.hook('build:before', () => {
    // ionicons
    this.options.head.script.push({
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
    });
    this.options.vue.config.ignoredElements = this.options.vue.config.ignoredElements || [];
    this.options.vue.config.ignoredElements.push(/^ion-/);

    // plugin
    this.options.plugins.push(path.join(__dirname, './plugin.js'));
  });
}