<script setup lang="ts">
import type { CheckboxProps } from "./checkbox.types";

defineOptions({
  name: "Checkbox",
});

const { label, checked } = defineProps<CheckboxProps>();

const emit = defineEmits(["change"]);

const isChecked = ref(checked ?? false);

const handleChange = () => {
  isChecked.value = !isChecked.value;
  emit("change", isChecked.value);
};
</script>

<template>
  <label>
    <input
      type="checkbox"
      :checked="checked"
      @change="handleChange"
    />
    <span v-if="label">{{ label }}</span>
  </label>
</template>
