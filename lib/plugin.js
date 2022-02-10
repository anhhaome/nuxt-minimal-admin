import Vue from 'vue';
import { component as VueCodeHighlight } from 'vue-code-highlight';

// components
import MDefaultLayout from './layouts/default.vue';
import MLoginForm from './comps/login-form.vue';

import MCodeblock from './comps/codeblock.vue';
import MPanel from './comps/panel.vue';
import MInput from './comps/input.vue';
import MButton from './comps/button.vue';
import MCheckboxGroup from './comps/checkbox-group.vue';
import MCheckboxControl from './comps/checkbox-control.vue';
import MCheckbox from './comps/checkbox.vue';

// scss
import './assets/scss/main.scss';
import 'prism-es6/components/prism-markup-templating';
import 'vue-code-highlight/themes/prism-okaidia.css'

const READING_SPEED = 250 * 10; // 250wpm ~ 250*10 chars per minute
const TIMEOUT = 1000;

// use
Vue.component('m-default-layout', MDefaultLayout);
Vue.component('m-login-form', MLoginForm);

Vue.component('m-codeblock', MCodeblock);
Vue.component('m-panel', MPanel);
Vue.component('m-input', MInput);
Vue.component('m-button', MButton);
Vue.component('m-checkbox-group', MCheckboxGroup);
Vue.component('m-checkbox-control', MCheckboxControl);
Vue.component('m-checkbox', MCheckbox);

// 3rd components
Vue.component('m-highlight', VueCodeHighlight);

// functions
const getTopOf = comp => {
  return comp.$parent ? getTopOf(comp.$parent) : comp;
}

export default (_, inject) => {
  // noti
  const noticeWrapper = document.createElement('div');
  noticeWrapper.className = 'm-notice-wrapper';
  document.body.appendChild(noticeWrapper);

  inject('noti', function(type, message){
    const comp = getTopOf(this);

    const notice = document.createElement('div');
    notice.className = `m-notice ${type} opacity-0 mb-[-2em]`;
    notice.innerHTML = message;
    noticeWrapper.appendChild(notice);

    setTimeout(() => {
      notice.className = `m-notice ${type}`;

      const timeout = setTimeout(() => {
        noticeWrapper.removeChild(notice);
      }, notice.innerText.length / READING_SPEED * 60 * 1000 + TIMEOUT);
  
      notice.addEventListener('click', () => {
        clearTimeout(timeout);
        noticeWrapper.removeChild(notice);
      })
    }, 10);
  });

  // loader
  const loaderElm = document.createElement('div');
  loaderElm.className = 'm-loader';
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

  // group data
  inject('mgroups', Vue.observable({}));
}
