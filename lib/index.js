import Vue from 'vue';

// components
import NDefaultLayout from './layouts/default.vue';
import NLoginForm from './comps/login-form.vue';

// scss
import './assets/scss/main.scss';

// use
Vue.component('n-default-layout', NDefaultLayout);
Vue.component('n-login-form', NLoginForm);

export default (_, inject) => {
  // noti
  inject('noti', function(type, message){
    this.$bvToast.toast(message, {
      title: 'Notice!',
      autoHideDelay: 2000,
      variant: type,
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