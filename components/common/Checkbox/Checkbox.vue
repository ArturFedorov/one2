<template>
  <label
    class="checkbox"
    :class="{'is-disabled': disabled}"
    @click="toggleCheck">
    <input
      :name="name"
      :checked="checked"
      :disabled="disabled"
      type="checkbox"
      @click.stop.prevent>
    <span
      class="checkbox-icon"
      :class="{'is-checked': checkedValue}"/>
    <span class="checkbox-label"><slot/></span>
  </label>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    props: {
      name: String,
      checked: Boolean,
      disabled: Boolean
    },
    computed: {
      checkedValue (): boolean {
        return this.checked;
      }
    },
    methods: {
      toggleCheck () {
        if (!this.disabled) {
          this.$emit('checked', !this.checked);
        }
      }
    }
  });
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/base/variables";
  $checkbox-size: $building-unit-x2;
  $checkbox-small-size: $building-unit;
  $checkbox-background-color: $gray;
  $checkbox-border-color: $gray;
  $checkbox-label-padding-left: $checkbox-size;
  $checkbox-small-label-padding-left: $checkbox-small-size;
  $checkbox-label-padding-top: $building-unit/4;
  input[type="checkbox"] {
    display: none;
  }
  label.checkbox {
    padding-left: $checkbox-label-padding-left;
    padding-top: $checkbox-label-padding-top;
    min-height: $checkbox-size;
    &.is-disabled {
      pointer-events: none;
      .checkbox-icon {
        background-color: $black;
        border-color: $black;
        pointer-events: none;
        &.is-checked {
          &::after {
            opacity: .5;
          }
        }
      }
      &:active,
      &:hover {
        background-color: transparent;
        border-color: $gray;
        pointer-events: none;
      }
    }
    &.is-small {
      padding-left: $checkbox-small-label-padding-left;
      min-height: $checkbox-small-size;
      .checkbox-icon {
        width: $checkbox-small-size;
        height: $checkbox-small-size;
        &::after {
          width: $checkbox-small-size;
          height: $checkbox-small-size;
        }
      }
    }
    &:hover {
      .checkbox-icon {
        background-color: transparent;
        color: $gray;
      }
    }
    &:active {
      .checkbox-icon {
        background-color: transparent;
      }
    }
    &:focus {
      outline: 0;
      .checkbox-icon {
        background-color: transparent;
        border-color: $black;
        box-shadow: 0 0 6px 0 rgba($black, .5);
        outline: 0;
      }
    }
  }
  .checkbox-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: $checkbox-size;
    height: $checkbox-size;
    background-color: transparent;
    border-radius: 0;
    border: 1px solid $checkbox-border-color;
    transition: all .4s;
    &::after {
      content: '';
      width: $checkbox-size;
      height: $checkbox-size;
      background: url('./assets/check.svg') no-repeat center / cover;
      position: absolute;
      top: -1px;
      left: -1px;
      opacity: 0;
    }
    &.is-checked {
      &::after {
        opacity: 1;
      }
    }
  }
  .checkbox-icon + .checkbox-label:not(:empty) {
    margin-left: $building-unit;
    display: block;
  }
</style>
