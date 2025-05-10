<script setup lang="ts">
import { type ButtonProps } from "./button.types";

defineOptions({
  name: "Button",
});

const { label, link, target, disabled } = defineProps<ButtonProps>();

</script>

<template>
  <button :disabled="disabled">
    <span v-if="label">{{ label }}</span>
  </button>
</template>
