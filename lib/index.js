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
  // console.log(_);
  inject('noti', function(type, message){
    this.$bvToast.toast(message, {
      title: 'Notice',
      autoHideDelay: 2000,
      variant: type,
      appendToast: true,
      toaster: 'b-toaster-bottom-right'
    });
  });
}