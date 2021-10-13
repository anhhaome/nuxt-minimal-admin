<template>
  <div class="m-app">
    <!-- UI CONTROLS -->
    <input type="checkbox" class="m-ui-control" id="op-menubar">
    <input type="checkbox" class="m-ui-control" id="op-sidebar">
    <!-- END UI CONTROLS -->

    <!-- TOPBAR -->
    <div class="m-topbar">
      <label class="m-button" for="op-menubar">
        <i class="icon icon-menu"></i>
      </label>

      <button class="m-button">
        <i class="icon icon-home"></i>
      </button>

      <input type="text" class="m-input fill">

      <label class="m-button" for="op-sidebar">
        <i class="icon icon-settings"></i>
      </label>
    </div>
    <!-- END TOPBAR -->

    <!-- MENUBAR -->
    <div class="m-menubar">
      <nuxt-link to="/" class="m-button" active>
        <span class="icon-wrapper">
          <i class="icon icon-fire"></i>
        </span>
        <span class="m-menu-label">Fire</span>
      </nuxt-link>

      <nuxt-link to="/" class="m-button">
        <span class="icon-wrapper">
          <i class="icon icon-cursor"></i>
        </span>
        <span class="m-menu-label">Cursor</span>
      </nuxt-link>

      <div class="divider"></div>

      <nuxt-link to="/" class="m-button">
        <span class="icon-wrapper">
          <i class="icon icon-logout"></i>
        </span>
        <span class="m-menu-label">Logout</span>
      </nuxt-link>
    </div>
    <!-- END MENUBAR -->

    <!-- SIDEBAR -->
    <div class="m-sidebar">
      <div class="m-theme-switch m-widget">
        <label for="">Theme</label>
        <button class="m-button dark" @click="setTheme('dark')" :active="currentTheme === 'dark'">Dark</button>
        <button class="m-button light" @click="setTheme('light')" :active="currentTheme === 'light'">Light</button>
      </div>
    </div>
    <!-- END SIDEBAR -->

    <!-- CONTENT -->
    <div class="m-content">
      <Nuxt />
    </div>
    <!-- END CONTENT -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      currentTheme: null
    }
  },

  methods: {
    setTheme(type){
      this.currentTheme = type;
      localStorage.setItem('theme', this.currentTheme)
      document.body.setAttribute('theme', this.currentTheme);
    }
  },

  mounted(){
    this.$nextTick(() => {
      this.setTheme(localStorage.getItem('theme') || 'light');
    });
  },
}
</script>

<style lang="scss" scoped>
@use "sass:math";
@use "sass:color";

@import '@/assets/scss/constants.scss';

$top-bar-height: 50px;
$top-bar-padding: 10px;

.m-app {
  $control-size: $top-bar-height - $top-bar-padding * 2;

  .m-ui-control {
    display: none;
  }

  .m-topbar,
  .m-menubar,
  .m-sidebar {
    background-color: var(--secondary-bg);
    position: fixed;
    z-index: 100;
  }

  .m-topbar {
    width: 100%;
    height: $top-bar-height;
    padding: $top-bar-padding ($top-bar-padding / 2);
    
    border-bottom: 1px solid var(--border);
    display: flex;
    
    .m-button {
      width: $control-size;
      height: $control-size;
      line-height: $control-size * 1.05;
      padding: 0;
      margin: 0 ($top-bar-padding / 2);
      font-size: inherit;
      color: var(--primary);

      display: block;
      background-color: transparent;
      border: none;
      text-align: center;
      cursor: pointer;
      border-radius: $radius;
      font-family: inherit;
      text-decoration: none;

      transition: all .1s;
    }

    .m-button:hover {
      font-size: 1.2em;
    }

    .m-input {
      padding: 0;
      margin: 0 ($top-bar-padding / 2);

      min-width: 10px;
      height: $control-size;
      line-height: $control-size;
      font-size: .85em;

      display: block;
      background-color: var(--primary-bg);
      border: none;
      padding: 0 ($control-size / 2);
      border-radius: $control-size / 2;
      font-family: inherit;

      transition: all .1s;
    }

    .m-input:hover,
    .m-input:active,
    .m-input:focus {
      outline: none;
      background-color: var(--primary-bg);
    }

    .fill {
      flex-grow: 1;
    }
  }

  .m-menubar,
  .m-sidebar {
    top: $top-bar-height;
    transition: all .2s;
    height: 100%;
  }

  .m-menubar {
    left: 0;
    width: $top-bar-height;
    padding: 0 ($top-bar-padding / 2);

    border-right: 1px solid var(--border);

    .m-button {
      padding: $top-bar-padding / 2;
      margin: ($top-bar-padding / 2) 0;
      position: relative;
      overflow: hidden;

      width: 100%;
      display: block;
      text-decoration: none;
      color: var(--primary);
      border-radius: $radius;

      white-space: nowrap;

      transition: all .1s;

      .icon-wrapper {
        width: $control-size;
        height: $control-size;
        line-height: $control-size;
        display: inline-block;
        text-align: center;
      }
    }

    .m-button:hover,
    .m-button[active] {
      background-color: var(--primary-bg);
    }

    .divider {
      width: 100%;
      height: 1px;
      background-color: var(--border);
      max-width: 80%;
      margin: 0 auto;
    }
  }

  #op-menubar:checked~.m-menubar {
    width: $top-bar-height * 5;
  }

  #op-menubar:not(:checked)~.m-menubar {
    .m-button:hover {
      overflow: visible;

      .m-menu-label {
        position: absolute;
        background-color: var(--secondary-bg);
        left: $control-size + $top-bar-padding * 3;
        border: 1px solid var(--border);
        padding: 0 $top-bar-padding;
        top: 0;
        height: $control-size + $top-bar-padding;
        line-height: $control-size + $top-bar-padding;
        border-radius: $radius;
      }

      .m-menu-label:before {
        content: ' ';
        width: $control-size / 2;
        height: $control-size / 2;
        display: block;
        position: absolute;
        left: - $control-size / 30 * 8;
        top: $control-size / 30 * 11;
        transform: rotate(45deg);
        background-color: var(--secondary-bg);
        border-left: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
      }
    }
  }

  .m-sidebar {
    width: $top-bar-height * 5;
    right: -$top-bar-height * 5;
    border-left: 1px solid var(--border);

    .m-widget {
      padding: $top-bar-padding;

      label {
        font-size: .8em;
        display: block;
        width: 100%;
        text-transform: uppercase;
      }
    }

    .m-theme-switch {
      overflow: hidden;

      .m-button {
        width: 50%;
        height: $control-size * 2;
        line-height: $control-size * 2;
        display: block;
        border: none;
        float: left;

        &.light {
          background-color: var(--light);
          color: --var('dark');
        }

        &.dark {
          background-color: var(--dark);
          color: var(--light);
        }

        &[active] {
          border: 3px solid lightgreen;
        }
      }
    }
  }

  #op-sidebar:checked~.m-sidebar {
    right: 0;
  }

  .m-content {
    padding-top: $top-bar-height;
    padding-left: $top-bar-height;
  }
}
</style>