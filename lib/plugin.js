import Vue from 'vue';

// components
import MDefaultLayout from './layouts/default.vue';
import MLoginForm from './comps/login-form.vue';

import MPanel from './comps/panel.vue';
import MInput from './comps/input.vue';
import MButton from './comps/button.vue';

// scss
import './assets/scss/main.scss';

// constants
const TYPES = {
  'success': 'success',
  'warning': 'warning',
  'info': 'info',
  'danger': 'danger',
  'error': 'danger',
  'primary': 'primary',
  'secondary': 'secondary',
  'light': 'light',
  'dark': 'dark'
}

// use
Vue.component('m-default-layout', MDefaultLayout);
Vue.component('m-login-form', MLoginForm);

Vue.component('m-panel', MPanel);
Vue.component('m-input', MInput);
Vue.component('m-button', MButton);

// functions
const getTopOf = comp => {
  return comp.$parent ? getTopOf(comp.$parent) : comp;
}

export default (_, inject) => {
  // noti
  inject('noti', function(type, message){
    const comp = getTopOf(this);

    comp.$bvToast.toast(message, {
      title: 'Notice!',
      autoHideDelay: 2000,
      variant: TYPES[type],
      appendToast: true,
      toaster: 'b-toaster-bottom-right'
    });
  });


  // loader
  const loaderElm = document.createElement('div');
  loaderElm.className = 'n-loader';
  document.body.appendChild(loaderElm);

  inject('loader', {
    counter: 0,

    start(){
      this.counter++;
      loaderElm.setAttribute('enabled', true);
    },

    end(){
      this.counter--;

      if (this.counter === 0)
        loaderElm.removeAttribute('enabled');
    }
  });
}
