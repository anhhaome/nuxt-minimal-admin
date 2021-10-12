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
    </div>
    <!-- END MENUBAR -->

    <!-- SIDEBAR -->
    <div class="m-sidebar">

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

}
</script>

<style lang="scss" scoped>
@use "sass:math";
@use "sass:color";

@import '@/assets/scss/colors.scss';

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
    background-color: $secondary-bg;
    position: fixed;
    z-index: 100;
  }

  .m-topbar {
    width: 100%;
    height: $top-bar-height;
    padding: $top-bar-padding ($top-bar-padding / 2);
    
    border-bottom: 1px solid $border;
    display: flex;
    
    .m-button {
      width: $control-size;
      height: $control-size;
      line-height: $control-size * 1.05;
      padding: 0;
      margin: 0 ($top-bar-padding / 2);
      font-size: inherit;

      display: block;
      background-color: transparent;
      border: none;
      text-align: center;
      cursor: pointer;
      border-radius: $top-bar-padding / 3;
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
      background-color: $primary-bg;
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
      background-color: darken($primary-bg, .1);
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

    border-right: 1px solid $border;

    .m-button {
      padding: $top-bar-padding / 2;
      margin: ($top-bar-padding / 2) 0;
      position: relative;
      overflow: hidden;

      width: 100%;
      display: block;
      text-decoration: none;
      color: $primary;
      border-radius: $control-size / 3;

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
      background-color: $primary-bg;
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
        background-color: white;
        left: $control-size + $top-bar-padding * 3;
        border: 1px solid $border;
        padding: 0 $top-bar-padding;
        top: 0;
        height: $control-size + $top-bar-padding;
        line-height: $control-size + $top-bar-padding;
        border-radius: $top-bar-padding / 3;
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
        background-color: white;
        border-left: 1px solid $border;
        border-bottom: 1px solid $border;
      }
    }
  }

  .m-sidebar {
    width: $top-bar-height * 5;
    right: -$top-bar-height * 5;
    border-left: 1px solid $border;
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