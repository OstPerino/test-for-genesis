<template>
  <div class="dropdown">
    <button @click="toggleDropdown">{{ selectedOption.label }}</button>
    <ul v-show="state.isDropdownOpen">
      <li v-for="option in options" :key="option.value" @click="onChangeHandler(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive} from "@vue/runtime-core";

import { dropdownOptions } from "@/components/types/dropdownTypes";

export default defineComponent({
  name: "CustomDropdown",
  props: {
    options: {
      type: Array as () => dropdownOptions[],
      required: true,
    },
    selectedOption: {
      type: Object as () => dropdownOptions,
      required: true,
    },

  },
  setup(props, {emit}) {
    const state = reactive({
      isDropdownOpen: false
    })

    const onChangeHandler = (option: dropdownOptions) => {
      emit("update:selectedOption", option)
      toggleDropdown();
    }

    const toggleDropdown = () => {
      state.isDropdownOpen = !state.isDropdownOpen
    }

    return {
      onChangeHandler,
      toggleDropdown,
      state
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/styles/_base.scss";

.dropdown {
  position: relative;
  display: inline-block;
  margin: 10px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
}

.dropdown button {
  position: relative;
  background-color: #fff;
  border: 1px solid #a5a5a5;
  border-radius: 4px;
  color: #454545;
  padding: 10px;
  padding-right: 30px;
  min-width: 200px;
  text-align: left;
  font-weight: 500;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.dropdown button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 99, 255, 0.2);
}

.dropdown button:before {
  content: '';
  position: absolute;
  top: 50%;
  right: 10px;
  width: 0;
  height: 0;
  margin-top: -3px;
  border-top: 6px solid #999;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
  pointer-events: none;
}

.dropdown ul {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border: 1px solid #a5a5a5;
  border-top: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}

.dropdown li {
  padding: 10px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
}

.dropdown li:hover {
  background-color: #eee;
}

.dropdown li.selected {
  background-color: #d1d1d1;
}

.dropdown li.disabled {
  color: #c7c7c7;
  cursor: default;
}

.dropdown li.divider {
  height: 1px;
  margin: 5px 0;
  background-color: #a5a5a5;
}
</style>