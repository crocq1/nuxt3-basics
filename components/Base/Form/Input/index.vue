<script setup lang="ts">
import type { FormInputProps } from "./input.types";

defineOptions({
  name: "FormInput",
});

const {
  name,
  label,
  placeholder,
  required,
  type,
  modelValue,
} = defineProps<FormInputProps>();

const emit = defineEmits(['update:modelValue']);
const updateInputValue = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit('update:modelValue', input.value);
};
</script>

<template>
  <div>
    <input
      :type="type ?? 'text'"
      :name="name"
      :value="modelValue"
      :placeholder="required ? placeholder + ' *' : placeholder"
      :required="required"
      @input="updateInputValue"
    />
    <label
      v-if="label"
      :for="name"
    >
      {{ label }}
      <span v-if="required">*</span>
    </label>
  </div>
</template>
