<template>
  <div class="main-page">
    <CustomButton :disabled="false">
      test
    </CustomButton>
    <CustomDropdown
        :selected-option="state.selectedOption"
        :options="state.options"
        @update:selectedOption="setSelectedOption"
    />
  </div>
</template>

<script lang="ts">
import {ref, Ref} from "vue";
import {defineComponent, reactive} from "@vue/runtime-core";

import {dropdownOptions} from "@/components/types/dropdownTypes";

import CustomButton from "@/components/UI/CustomButton.vue";
import CustomDropdown from "@/components/UI/CustomDropdown.vue";

export default defineComponent({
  name: "MainPage",
  components: {CustomDropdown, CustomButton},
  setup() {
    const counter: Ref<number> = ref(5);
    const state = reactive({
      options: [
        {label: 'Не выбрано', value: 'Не выбрано'},
        {label: 'Сделка', value: 'Сделка'},
        {label: 'Контакт', value: 'Контакт'},
        {label: 'Компания', value: 'Компания'}],
      selectedOption: {label: "Не выбрано", value: "Не выбрано"}
    })

    const setSelectedOption = (option: dropdownOptions) => {
      state.selectedOption = option;
    }

    return {
      counter,
      state,
      setSelectedOption
    };
  },
})
</script>

<style lang="scss" scoped>

.main-page {
  max-width: 1440px;
  margin: 0 auto;
}

</style>