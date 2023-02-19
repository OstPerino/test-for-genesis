<template>
  <li class="options-item">{{ item.id }}</li>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "OptionsItem",
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/styles/_base.scss";
</style>