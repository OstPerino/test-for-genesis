<template>
  <div class="custom-dropdown">
    <button @click="toggleDropdown">{{ selectedOption.label }}</button>
    <ul v-show="state.isDropdownOpen">
      <li v-for="option in options" :key="option.value" @click="onChangeHandler(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive } from "@vue/runtime-core";

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

button {
  border: 1px solid $black;
}

li {
  border: 1px solid $black;
  cursor: pointer;
}
</style>