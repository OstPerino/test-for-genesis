<template>
  <button class="btn" @click="onClickHandler" :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {defineComponent, computed} from '@vue/runtime-core'
export default defineComponent({
  name: "CustomButton",
  props: {
    disabled: {
      type: Boolean,
      required: true,
    }
  },
  emits: ["click"],
  setup(props, {emit}) {

    const classes = computed(() => {
      return props.disabled ? ['btn-disabled'] : ''
    })

    const onClickHandler = () => {
      if (!props.disabled) {
        emit("click");
      }
    }

    return {
      onClickHandler,
      classes
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/styles/_base.scss";

.btn {
  padding: 10px 15px;
  background-color: $blue;
  color: $white;
  border-radius: 5px;
}

.btn-disabled {
  opacity: 70%;
}
</style>