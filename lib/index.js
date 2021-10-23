import Vue from 'vue';

// components
import NDefaultLayout from './layouts/default.vue';
import NLoginForm from './comps/login-form.vue';

// scss
import './assets/scss/main.scss';

// use
Vue.component('n-default-layout', NDefaultLayout);
Vue.component('n-login-form', NLoginForm);